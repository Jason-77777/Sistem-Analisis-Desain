<?php
// Koneksi ke database
$host = "localhost";
// $username = "username_mysql";
// $password = "password_mysql";
$database = "User_data";

$koneksi = mysqli_connect($host, $username, $password, $database);

// Periksa koneksi
if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

// Tangkap data dari formulir jika ada pengiriman data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Tangkap data dari formulir
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Gunakan hash untuk menyimpan kata sandi
    $age = $_POST['age'];
    $gender = $_POST['gender'];
    $favorite_genre = $_POST['genre'];

    // Buat query untuk menyimpan data ke dalam database
    $query = "INSERT INTO users (username, password, age, gender, favorite_genre) 
              VALUES ('$username', '$password', $age, '$gender', '$favorite_genre')";

    $result = mysqli_query($koneksi, $query);

    // Periksa hasil eksekusi query
    if ($result) {
        echo "Pendaftaran berhasil. Silakan login <a href='Loginpage.html'>di sini</a>.";
    } else {
        echo "Pendaftaran gagal. Silakan coba lagi.";
    }
}

// Tutup koneksi
mysqli_close($koneksi);
?>
