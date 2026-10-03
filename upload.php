<?php
/* ==========================================================================
   مؤسسة عربة الخضار - معالج رفع الصور للمجلد المنظم (upload.php)
   تلقي الصور من لوحة التحكم وحفظها في مجلد uploads/ المخصص
   ========================================================================== */

header('Content-Type: application/json; charset=utf-8');

// السماح فقط لطلبات POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'طريقة الطلب غير مسموح بها']);
    exit;
}

// التأكد من وجود المجلد المخصص للرفع
$uploadDir = __DIR__ . '/uploads/';
if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

// التحقق من رفع الملف
if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'لم يتم استلام الملف بشكل صحيح']);
    exit;
}

$file = $_FILES['image'];
$fileName = $file['name'];
$fileTmp = $file['tmp_name'];
$fileSize = $file['size'];

// صيغ الصور المسموح بها
$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'];
$fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

if (!in_array($fileExt, $allowedExtensions)) {
    echo json_encode(['success' => false, 'message' => 'صيغة الملف غير مسموح بها. الصيغ المتاحة: JPG, PNG, WEBP, GIF']);
    exit;
}

// الحد الأقصى لحجم الملف (10 ميجابايت)
if ($fileSize > 10 * 1024 * 1024) {
    echo json_encode(['success' => false, 'message' => 'حجم الصورة كبير جداً. الحد الأقصى هو 10 ميجابايت']);
    exit;
}

// إنشاء اسم ملف فريد ومنظم
$cleanBaseName = preg_replace('/[^a-zA-Z0-9_-]/', '_', pathinfo($fileName, PATHINFO_FILENAME));
$newFileName = 'img_' . time() . '_' . rand(100, 999) . '_' . substr($cleanBaseName, 0, 15) . '.' . $fileExt;
$targetPath = $uploadDir . $newFileName;

// نقل الملف المرفوع إلى المجلد المنظم
if (move_uploaded_file($fileTmp, $targetPath)) {
    $relativeUrl = 'uploads/' . $newFileName;
    echo json_encode([
        'success' => true,
        'message' => 'تم حفظ الصورة بنجاح في مجلد uploads',
        'url' => $relativeUrl,
        'fileName' => $newFileName
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'تعذر نقل واستحداث الصورة في المجلد المنظم']);
}
