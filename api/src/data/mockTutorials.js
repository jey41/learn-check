// Mock tutorial data to replace expired Dicoding API
// Each tutorial has an ID and HTML content that Gemini can use to generate quizzes

const tutorials = {
  "35363": {
    id: "35363",
    title: "Pengenalan JavaScript",
    content: `
      <h1>Pengenalan JavaScript</h1>

      <h2>Apa itu JavaScript?</h2>
      <p>JavaScript adalah bahasa pemrograman tingkat tinggi yang awalnya dikembangkan oleh Brendan Eich pada tahun 1995 untuk browser Netscape Navigator. Saat ini, JavaScript telah menjadi salah satu bahasa pemrograman paling populer di dunia dan digunakan tidak hanya di sisi klien (browser), tetapi juga di sisi server melalui Node.js.</p>

      <h2>Variabel dalam JavaScript</h2>
      <p>Dalam JavaScript modern (ES6+), ada tiga cara untuk mendeklarasikan variabel:</p>
      <ul>
        <li><code>let</code> - untuk variabel yang nilainya bisa berubah (mutable). Memiliki block scope.</li>
        <li><code>const</code> - untuk variabel yang nilainya tidak bisa diubah setelah diinisialisasi (immutable). Juga memiliki block scope.</li>
        <li><code>var</code> - cara lama mendeklarasikan variabel. Memiliki function scope. Sebaiknya hindari penggunaannya di kode modern.</li>
      </ul>
      <p>Contoh penggunaan:</p>
      <pre><code>
let nama = "Budi";
const PI = 3.14159;
var umur = 25; // hindari penggunaan var
      </code></pre>

      <h2>Tipe Data</h2>
      <p>JavaScript memiliki beberapa tipe data primitif:</p>
      <ul>
        <li><strong>String</strong> - teks, diapit tanda kutip. Contoh: "Hello World"</li>
        <li><strong>Number</strong> - angka, baik bilangan bulat maupun desimal. Contoh: 42, 3.14</li>
        <li><strong>Boolean</strong> - nilai logika, hanya true atau false</li>
        <li><strong>Undefined</strong> - variabel yang sudah dideklarasikan tapi belum diberi nilai</li>
        <li><strong>Null</strong> - nilai kosong yang disengaja</li>
        <li><strong>Symbol</strong> - tipe data unik yang diperkenalkan di ES6</li>
        <li><strong>BigInt</strong> - untuk angka yang sangat besar, diperkenalkan di ES2020</li>
      </ul>

      <h2>Fungsi</h2>
      <p>Fungsi adalah blok kode yang dapat dipanggil berulang kali. Dalam JavaScript, ada beberapa cara membuat fungsi:</p>
      <pre><code>
// Function declaration
function sapa(nama) {
  return "Halo, " + nama + "!";
}

// Function expression
const tambah = function(a, b) {
  return a + b;
};

// Arrow function (ES6)
const kali = (a, b) => a * b;
      </code></pre>
      <p>Arrow function adalah sintaks yang lebih ringkas dan sering digunakan di JavaScript modern, terutama untuk callback function.</p>

      <h2>Array dan Object</h2>
      <p>Array adalah struktur data yang menyimpan kumpulan nilai dalam urutan tertentu. Object adalah struktur data yang menyimpan pasangan key-value.</p>
      <pre><code>
// Array
const buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]); // "apel"

// Object
const mahasiswa = {
  nama: "Andi",
  umur: 21,
  jurusan: "Informatika"
};
console.log(mahasiswa.nama); // "Andi"
      </code></pre>

      <h2>Control Flow</h2>
      <p>JavaScript menyediakan beberapa struktur kontrol alur program:</p>
      <ul>
        <li><strong>if/else</strong> - percabangan kondisional</li>
        <li><strong>switch</strong> - percabangan berdasarkan nilai tertentu</li>
        <li><strong>for</strong> - perulangan dengan counter</li>
        <li><strong>while</strong> - perulangan berdasarkan kondisi</li>
        <li><strong>for...of</strong> - perulangan untuk iterable (array, string, dll)</li>
        <li><strong>for...in</strong> - perulangan untuk property object</li>
      </ul>
    `
  },

  "105": {
    id: "105",
    title: "Dasar-Dasar HTML",
    content: `
      <h1>Dasar-Dasar HTML</h1>

      <h2>Apa itu HTML?</h2>
      <p>HTML (HyperText Markup Language) adalah bahasa markup standar yang digunakan untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan serangkaian elemen atau tag. Setiap elemen HTML memberitahu browser bagaimana cara menampilkan konten.</p>

      <h2>Struktur Dasar HTML</h2>
      <p>Setiap dokumen HTML memiliki struktur dasar sebagai berikut:</p>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Judul Halaman&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Heading Utama&lt;/h1&gt;
    &lt;p&gt;Ini adalah paragraf.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - deklarasi tipe dokumen HTML5</li>
        <li><code>&lt;html&gt;</code> - elemen root dari halaman HTML</li>
        <li><code>&lt;head&gt;</code> - berisi metadata seperti judul, charset, dan link stylesheet</li>
        <li><code>&lt;body&gt;</code> - berisi semua konten yang ditampilkan di browser</li>
      </ul>

      <h2>Elemen Semantik HTML5</h2>
      <p>HTML5 memperkenalkan elemen-elemen semantik yang memberikan makna pada struktur halaman:</p>
      <ul>
        <li><code>&lt;header&gt;</code> - bagian atas halaman atau section</li>
        <li><code>&lt;nav&gt;</code> - navigasi utama</li>
        <li><code>&lt;main&gt;</code> - konten utama halaman</li>
        <li><code>&lt;article&gt;</code> - konten yang berdiri sendiri</li>
        <li><code>&lt;section&gt;</code> - bagian tematik dari konten</li>
        <li><code>&lt;aside&gt;</code> - konten samping yang terkait</li>
        <li><code>&lt;footer&gt;</code> - bagian bawah halaman atau section</li>
      </ul>
      <p>Penggunaan elemen semantik sangat penting untuk aksesibilitas dan SEO karena membantu screen reader dan mesin pencari memahami struktur halaman.</p>

      <h2>Form HTML</h2>
      <p>Form digunakan untuk mengumpulkan input dari pengguna. Elemen-elemen form penting:</p>
      <ul>
        <li><code>&lt;form&gt;</code> - container untuk elemen input</li>
        <li><code>&lt;input&gt;</code> - elemen input dengan berbagai tipe (text, email, password, number, checkbox, radio)</li>
        <li><code>&lt;textarea&gt;</code> - input teks multiline</li>
        <li><code>&lt;select&gt;</code> dan <code>&lt;option&gt;</code> - dropdown menu</li>
        <li><code>&lt;button&gt;</code> - tombol untuk submit atau aksi lainnya</li>
        <li><code>&lt;label&gt;</code> - label untuk elemen input, penting untuk aksesibilitas</li>
      </ul>

      <h2>Atribut HTML</h2>
      <p>Atribut memberikan informasi tambahan pada elemen HTML. Beberapa atribut penting:</p>
      <ul>
        <li><code>id</code> - identifikasi unik untuk elemen</li>
        <li><code>class</code> - mengelompokkan elemen untuk styling CSS</li>
        <li><code>src</code> - sumber file untuk gambar, script, dll</li>
        <li><code>href</code> - URL tujuan untuk link</li>
        <li><code>alt</code> - teks alternatif untuk gambar (aksesibilitas)</li>
        <li><code>style</code> - inline CSS styling</li>
      </ul>
    `
  },

  "200": {
    id: "200",
    title: "Dasar-Dasar CSS",
    content: `
      <h1>Dasar-Dasar CSS</h1>

      <h2>Apa itu CSS?</h2>
      <p>CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain dan mengatur tampilan halaman web. CSS memisahkan konten (HTML) dari presentasi visual, sehingga memudahkan pemeliharaan dan konsistensi tampilan di seluruh halaman.</p>

      <h2>Cara Menambahkan CSS</h2>
      <p>Ada tiga cara untuk menambahkan CSS ke halaman HTML:</p>
      <ul>
        <li><strong>Inline CSS</strong> - langsung di atribut style elemen. Contoh: &lt;p style="color: red;"&gt;</li>
        <li><strong>Internal CSS</strong> - di dalam tag &lt;style&gt; di bagian &lt;head&gt;</li>
        <li><strong>External CSS</strong> - file CSS terpisah yang dihubungkan dengan tag &lt;link&gt;. Ini adalah cara yang paling direkomendasikan.</li>
      </ul>

      <h2>Selector CSS</h2>
      <p>Selector digunakan untuk memilih elemen HTML yang ingin diberi style:</p>
      <ul>
        <li><strong>Element selector</strong> - memilih berdasarkan nama tag. Contoh: <code>p { color: blue; }</code></li>
        <li><strong>Class selector</strong> - memilih berdasarkan class, menggunakan titik. Contoh: <code>.judul { font-size: 24px; }</code></li>
        <li><strong>ID selector</strong> - memilih berdasarkan id, menggunakan tanda pagar. Contoh: <code>#header { background: black; }</code></li>
        <li><strong>Descendant selector</strong> - memilih elemen turunan. Contoh: <code>div p { margin: 10px; }</code></li>
        <li><strong>Pseudo-class</strong> - memilih state tertentu. Contoh: <code>a:hover { color: red; }</code></li>
      </ul>

      <h2>Box Model</h2>
      <p>Setiap elemen HTML dianggap sebagai sebuah kotak (box) yang terdiri dari:</p>
      <ul>
        <li><strong>Content</strong> - area konten, tempat teks dan gambar ditampilkan</li>
        <li><strong>Padding</strong> - ruang antara konten dan border</li>
        <li><strong>Border</strong> - garis pembatas di sekitar padding</li>
        <li><strong>Margin</strong> - ruang di luar border, memisahkan elemen dari elemen lain</li>
      </ul>
      <p>Memahami box model sangat penting untuk mengatur layout dan spacing elemen di halaman web.</p>

      <h2>Flexbox</h2>
      <p>Flexbox adalah metode layout CSS modern yang memudahkan pengaturan tata letak elemen dalam satu dimensi (baris atau kolom). Properti utama flexbox:</p>
      <ul>
        <li><code>display: flex</code> - mengaktifkan flexbox pada container</li>
        <li><code>flex-direction</code> - menentukan arah utama (row, column)</li>
        <li><code>justify-content</code> - mengatur perataan di sumbu utama</li>
        <li><code>align-items</code> - mengatur perataan di sumbu silang</li>
        <li><code>gap</code> - mengatur jarak antar elemen flex</li>
        <li><code>flex-wrap</code> - mengatur apakah elemen bisa dibungkus ke baris baru</li>
      </ul>

      <h2>Responsive Design</h2>
      <p>Responsive design memastikan halaman web tampil baik di berbagai ukuran layar. Alat utama untuk responsive design:</p>
      <ul>
        <li><strong>Media queries</strong> - menerapkan style berbeda berdasarkan ukuran layar. Contoh: <code>@media (max-width: 768px) { ... }</code></li>
        <li><strong>Viewport meta tag</strong> - <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></li>
        <li><strong>Unit relatif</strong> - menggunakan em, rem, %, vw, vh daripada pixel tetap</li>
        <li><strong>Fluid grid</strong> - menggunakan persentase untuk lebar container</li>
      </ul>
    `
  }
};

export default tutorials;
