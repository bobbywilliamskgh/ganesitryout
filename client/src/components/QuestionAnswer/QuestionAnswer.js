import Question from "../Question/Question";
import AnswerChoices from "../AnswerChoices/AnswerChoices";

class TryoutModel {
  tryoutId;
  questions;

  constructor(tryoutId, questions) {
    this.tryoutId = tryoutId;
    this.questions = questions;
  }

  getQuestions = () => {
    return this.questions;
  };
}

class QuestionModel {
  questId;
  category;
  paragraphs;
  answerChoice;

  constructor(questId, category, paragraphs, answerChoice) {
    this.questId = questId;
    this.category = category;
    this.paragraphs = paragraphs;
    this.answerChoice = answerChoice;
  }

  getCategory = () => {
    return this.category;
  };

  getQuestText = () => {
    return this.paragraphs;
  };

  getAnswerChoice = () => {
    return this.answerChoice;
  };
}

class AnswerChoiceModel {
  choiceId;
  choiceText;

  constructor(choiceId, choiceText) {
    this.choiceId = choiceId;
    this.choiceText = choiceText;
  }

  getChoiceId = () => {
    return this.choiceId;
  };

  getChoiceText = () => {
    return this.choiceText;
  };
}

const QuestionAnswer = ({ questionNumber, tryoutId, onUserAnswerChange, userAnswers, currentAnswer }) => {
  const tryoutList = [
    new TryoutModel("1", [
      new QuestionModel("1", "pertanyaan1TO1 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("2", "pertanyaan2TO1 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("3", "pertanyaan3TO1 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
    ]),
    new TryoutModel("2", [
      new QuestionModel("1", "pertanyaan1TO2 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("2", "pertanyaan2TO2 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("3", "pertanyaan3TO2 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
    ]),
    new TryoutModel("3", [
      new QuestionModel("1", "pertanyaan1TO3 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("2", "pertanyaan2TO3 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("3", "pertanyaan3TO3 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
    ]),
    new TryoutModel("4", [
      new QuestionModel(
        "1",
        "twk",
        "Salah satu upaya pencegahan korupsi yaitu dengan melakukan pemberian insentif bagi karyawan melalui kompetisi dalam kinerja, di mana dengan kompetisi yang sehat dan insentif yang baik, maka sangat diharapkan seeorang tidak lagi perlu melakukan tindak korupsi hanya demi menerima keuntungan, merupakan pencegahan korupsi menggunakan pendekatan …",
        [
          new AnswerChoiceModel("A", "Pengacara "),
          new AnswerChoiceModel("B", "Bisnis"),
          new AnswerChoiceModel("C", "Pasar"),
          new AnswerChoiceModel("D", "Budaya"),
          new AnswerChoiceModel("E", "Moral"),
        ]
      ),
      new QuestionModel(
        "2",
        "twk",
        "Pada sidang BPUPKI pertama, Ir. Soekarno memberi usul tekait rumusan pancasila berupa Kebangsaan, internasional (peri kemanusiaan), mufakat, kesejahteraan sosial dan ketuhanan. namun rumusan tersebut apabila diperlukan dapat dijadikan Tiga Sila atau disebut Trisila yang terdiri dari ...",
        [
          new AnswerChoiceModel("A", "Kebangsaan, mufakat dan demokrasi, dan ketuhanan"),
          new AnswerChoiceModel("B", "Sosionasionalisme, sosiodemokrasi dan Ketuhanan yang berkebudayaan "),
          new AnswerChoiceModel("C", "Nasionalisme, Ketuhanan Yang Maha Esa, dan kesejahtraan sosial"),
          new AnswerChoiceModel("D", "Kesejahteraan sosial, nasionalisme, perikemanusiaan dan ketuhanan"),
          new AnswerChoiceModel("E", "Nasionalisme, mufakat, demokrasi dan ketuhanan "),
        ]
      ),
      new QuestionModel(
        "3",
        "twk",
        "Aksi penjarahan di kota-kota besar semakin menggila. Setelah sejumlah daerah di pulau Jawa mulai marak. Penjarahan sering kali diikuti dengan aksi kekerasan yang mengakibatkan kekacauan di masyarakat. Urutan pengembangan penggalan berita tersebut menggunakan pertanyaan ...",
        [
          new AnswerChoiceModel("A", "apa, mengapa, dimana "),
          new AnswerChoiceModel("B", "siapa, di mana, kapan"),
          new AnswerChoiceModel("C", "mengapa, siapa, apa"),
          new AnswerChoiceModel("D", "mengapa, di mana, bagaimana "),
          new AnswerChoiceModel("E", "apa, di mana, bagaimana "),
        ]
      ),
      new QuestionModel(
        "4",
        "twk",
        "Proses pembauran beragam aspek sosial budaya ke dalam satuan wilayah dan pembentukan identitas nasional  wajib dapat memberi jaminan akan terciptanya keselarasan, keserasian dan keseimbangan dalam mencapai tujuan bersama sebagai suatu bangsa merupakan definisi dari ...",
        [
          new AnswerChoiceModel("A", "Akulturasi sosial"),
          new AnswerChoiceModel("B", "Asimilasi budaya "),
          new AnswerChoiceModel("C", "ntegrasi bangsa"),
          new AnswerChoiceModel("D", "Internalisasi sosial budaya"),
          new AnswerChoiceModel("E", "Konsensus budaya"),
        ]
      ),
      new QuestionModel(
        "5",
        "twk",
        "Kesatuan masyarakat hukum yang memiliki batasan wilayah yang berwenang dalam mengatur dan mengelola kegiatan pemerintahan dan kepentingan rakyat setempat, menurut gagasan yang berdasar pada aspirasi rakyat dalam sistem Negara Kesatuan Republik Indonesia dikenal dengan istilah ...",
        [
          new AnswerChoiceModel("A", "Otonomi"),
          new AnswerChoiceModel("B", "Otonomi Daerah "),
          new AnswerChoiceModel("C", "Pembagian Otonomi Daerah "),
          new AnswerChoiceModel("D", "Otonom"),
          new AnswerChoiceModel("E", "Daerah Otonom"),
        ]
      ),
      new QuestionModel(
        "6",
        "twk",
        "Pancasila merupakan sumber cita-cita yang dianggap baik dan benar oleh bangsa Indonesia. Dalam hal ini Pancasila mempunyai kedudukan sebagai..",
        [
          new AnswerChoiceModel("A", "Sumber dari segala sumber hukum"),
          new AnswerChoiceModel("B", "Dasar Negara Bangsa Indonesia "),
          new AnswerChoiceModel("C", "Pandangan hidup bangsa Indonesia"),
          new AnswerChoiceModel("D", "Perjanjian Luhur "),
          new AnswerChoiceModel("E", "Ideologi Bangsa Indonesia"),
        ]
      ),
      new QuestionModel(
        "7",
        "twk",
        " Pada 5 Mei 1980, setidaknya ada 50 tokoh nasional bernyali tinggi yang menandatangi sebuah surat yang kemudian dibacakan di depan para anggota DPR-RI di Jakarta sepekan berselang. Dokumen tersebut berisi penentangan terhadap penggunaan filsafat negara Pancasila oleh Presiden Soeharto terhadap lawan-lawan politiknya yang dikenal dengan sebutan...",
        [
          new AnswerChoiceModel("A", "Petisi Sutardjo "),
          new AnswerChoiceModel("B", "Petisi 50"),
          new AnswerChoiceModel("C", "Indonesia menggugat"),
          new AnswerChoiceModel("D", "Als Ik een Nederlande "),
          new AnswerChoiceModel("E", "Max Haveelar"),
        ]
      ),
      new QuestionModel(
        "8",
        "twk",
        "Dalam rangka membina rasa nasionalis di kalangan masyarakat Indonesia hendaknya dilakukan dengan menghindari hal-hal di bawah ini , kecuali",
        [
          new AnswerChoiceModel("A", "Patriotisme"),
          new AnswerChoiceModel("B", "Sukuisme"),
          new AnswerChoiceModel("C", "Chauvinisme"),
          new AnswerChoiceModel("D", "Ekstrimisme "),
          new AnswerChoiceModel("E", "Fanatik golongan"),
        ]
      ),
      new QuestionModel(
        "9",
        "twk",
        "Pancasila merupakan isi jiwa bangsa Indonesia secara turun - temurun yang terpendam biru berabad-abad lamanya oleh kebudayaan Barat. Pendapat itu disampaikan oleh ...",
        [
          new AnswerChoiceModel("A", "Soekarno"),
          new AnswerChoiceModel("B", "Notonegoro"),
          new AnswerChoiceModel("C", "Mr. Supomo"),
          new AnswerChoiceModel("D", "Mr. Muhammad Yamin"),
          new AnswerChoiceModel("E", "Radjiman Wedyodiningrat"),
        ]
      ),
      new QuestionModel("10", "twk", "Pancasila bukan merupakan doktrin, paham yg utopis, dan chauvinisme. Chauvinisme adalah...", [
        new AnswerChoiceModel("A", "Cinta tanah air yang berlebihan dengan mengagungkan ciri sendiri dan merendahkan bangsa lain. "),
        new AnswerChoiceModel("B", "Perpaduan dari paham-paham atau aliran-aliran agama kepercayaan"),
        new AnswerChoiceModel("C", "Kebebasan dan persamaan hak"),
        new AnswerChoiceModel("D", "Suku bangsanya lebih baik dari suku bangsa manapun"),
        new AnswerChoiceModel("E", "Cinta tanah air dan rela berkorban demi tanah air "),
      ]),
      new QuestionModel(
        "11",
        "twk",
        "Cita-cita nasional Bangsa Indonesia yang memberi corak kepada politik luar negeri Indonesia yang bebas dan aktif tercantum dalam Pembukaan UUD 1945, yaitu...",
        [
          new AnswerChoiceModel("A", "Menjaga ketertiban dunia"),
          new AnswerChoiceModel("B", "Mengirimkan pasukan ke wilayah konflik"),
          new AnswerChoiceModel("C", "Menentang penyerangan sepihak oleh AS"),
          new AnswerChoiceModel("D", "Mendukung penyelenggaraan hubungan bilateral "),
          new AnswerChoiceModel("E", "Kemerdekaan adalah hak segala bangsa "),
        ]
      ),
      new QuestionModel("12", "twk", "Berikut adalah tugas Kepolisian Negara Indonesia sesuai dengan pasal 30 ayat 4, kecuali...", [
        new AnswerChoiceModel("A", "Alat negara yang menjaga keamanan"),
        new AnswerChoiceModel("B", "Menjaga ketertiban"),
        new AnswerChoiceModel("C", "Melindungi masyarakat "),
        new AnswerChoiceModel("D", "Mengayomi masyarakat"),
        new AnswerChoiceModel("E", "Mengamankan perbatasan negara"),
      ]),
      new QuestionModel(
        "13",
        "twk",
        "Mahkamah Konstitusi dibentuk selambat-lambatnya pada 17 Agustus 2003 dan sebelum dibentuk segala wewenangnya dilakukan oleh MA, hal ini disebutkan dalam UUD 1945...",
        [
          new AnswerChoiceModel("A", "Aturan peralihan pasal I "),
          new AnswerChoiceModel("B", "Aturan peralihan pasal II"),
          new AnswerChoiceModel("C", "Aturan peralihan pasal III"),
          new AnswerChoiceModel("D", "Aturan tambahan pasal I"),
          new AnswerChoiceModel("E", "Aturan tambahan pasal II"),
        ]
      ),
      new QuestionModel("14", "twk", "Bangsa Indonesia brtekad untuk mementang setiap bentuk penjajahan. Hal ini tertuang dalam pembukaan UUD 1945 :", [
        new AnswerChoiceModel("A", "Aliena 1 "),
        new AnswerChoiceModel("B", "Alinea 2 "),
        new AnswerChoiceModel("C", "Alinea 3"),
        new AnswerChoiceModel("D", "Alinea 4"),
        new AnswerChoiceModel("E", "Alinea 5"),
      ]),
      new QuestionModel(
        "15",
        "twk",
        "Pemberian gelar, tanda jasa, dan kehormatan oleh Presiden, diatur dalam undang-undang. Hal ini dinyatakan dalam UUD 1945 pasal...",
        [
          new AnswerChoiceModel("A", "Pasal 12"),
          new AnswerChoiceModel("B", "Pasal 13"),
          new AnswerChoiceModel("C", "Pasal 14"),
          new AnswerChoiceModel("D", "Pasal 15"),
          new AnswerChoiceModel("E", "Pasal 16"),
        ]
      ),
      new QuestionModel(
        "16",
        "twk",
        "Sebuah konstitusi yang berlaku sebagai hukum dasar yang mengikat dilandaskan atas kekuasaan tertinggi atau asas kedaulatan yang dianut oleh suatu Negara. Dalam hal tersebut, sumber legitimasi Undang-Undang Dasar 1945 sebagai konstitusi ialah ...",
        [
          new AnswerChoiceModel("A", "Presiden"),
          new AnswerChoiceModel("B", "Yudikatif"),
          new AnswerChoiceModel("C", "Raja"),
          new AnswerChoiceModel("D", "Legislatif"),
          new AnswerChoiceModel("E", "Rakyat"),
        ]
      ),
      new QuestionModel(
        "17",
        "twk",
        "Segala aturan yang ada di Negara republik Indonesia memiliki kedudukan tertentu. Di antara perundang-undangan berikut, yang memiliki kedudukan terendah daripada yang lain adalah …",
        [
          new AnswerChoiceModel("A", "Undang-undang"),
          new AnswerChoiceModel("B", "Keputusan MPR"),
          new AnswerChoiceModel("C", "Keputusan presiden"),
          new AnswerChoiceModel("D", "Ketetapan MPR D"),
          new AnswerChoiceModel("E", "Undang-undang Dasar"),
        ]
      ),
      new QuestionModel(
        "18",
        "twk",
        "Trias politica merupakan ajaran mengenai pemisahan kekuasaan negara menjadi 3 yaitu Legislatif, Eksekutif, dan Judikatif yang penerapan tapi-tapi kekuasaannya itu diserahkan kepada ...",
        [
          new AnswerChoiceModel("A", "negara"),
          new AnswerChoiceModel("B", "pemerintahan"),
          new AnswerChoiceModel("C", "badan independen"),
          new AnswerChoiceModel("D", "masing-masing badan fungsional negara "),
          new AnswerChoiceModel("E", "badan yang berwenang untuk melaksanakan masing-masing tugasnya"),
        ]
      ),
      new QuestionModel("19", "twk", "Salah satu isi pokok dari batang tubuh UUD 1945 adalah....", [
        new AnswerChoiceModel("A", "Sistem pemerintahan negara "),
        new AnswerChoiceModel("B", "Hubungan negara dengan negara lain"),
        new AnswerChoiceModel("C", "Amandemen UUD 1945"),
        new AnswerChoiceModel("D", "Negara yang berkedaulatan rakyat "),
        new AnswerChoiceModel("E", "Negara yang melindungi segenap bangsanya "),
      ]),
      new QuestionModel(
        "20",
        "twk",
        "Pada 18 Agustus 1945, PPKI mengesahkan kedudukan hukum Pancasila sebagai Dasar Negara yang termaktub pada alinea keempat Pembukaan Undang-Undang Dasar 1945. Kemudian hal itu kembali dipertegas dengan Ketetapan Majelis Permusyawaratan Rakyat Nomor ...",
        [
          new AnswerChoiceModel("A", "XV"),
          new AnswerChoiceModel("B", "XVI"),
          new AnswerChoiceModel("C", "XVII"),
          new AnswerChoiceModel("D", "XVIII"),
          new AnswerChoiceModel("E", "XIV"),
        ]
      ),
      new QuestionModel(
        "21",
        "twk",
        "Kalimat Bhineka Tunggal Ika pada awalnya merupakan isi dari sebuah kitab pada masa kerajaan Majapahit yang mengajarkan tentang ...",
        [
          new AnswerChoiceModel("A", "Keberagaman kasta rakyat Majapahit "),
          new AnswerChoiceModel("B", "Keberagaman rakyat Majapahit dari seluruh nusantara "),
          new AnswerChoiceModel("C", "Toleransi antara anggota keluarga kerajaan Majapahit"),
          new AnswerChoiceModel("D", "Toleransi antara umat Hindu Siwa dan umat Budha"),
          new AnswerChoiceModel("E", "Kesatuan para tentara kerajaan Majapahit dalam melakukan ekspansi wilayah nusantara"),
        ]
      ),
      new QuestionModel(
        "22",
        "twk",
        "Indonesia terdiri atas beraneka ragam suku bangsa yang memiliki kebudayaan dan adat-istiadat yang bermacam-macam. Hal ini menyebabkan ...",
        [
          new AnswerChoiceModel("A", "Indonesia sulit bersatu karena pemikiran tiap suku bangsa yang berbeda-beda"),
          new AnswerChoiceModel("B", "Menguatnya paham primordialisme"),
          new AnswerChoiceModel("C", "Kebudayaan tidak dapat dipadukan karena memiliki nilai budayanya sendiri"),
          new AnswerChoiceModel("D", "Setiap nilai-nilai kebudayaan saling bertentangan satu dengan yang lainnya"),
          new AnswerChoiceModel("E", "Memperkaya sifat dan makna persatuan bangsa dan negara Indonesia"),
        ]
      ),
      new QuestionModel(
        "23",
        "twk",
        "Kebulatan tekad untuk mewujudkan Persatuan Indonesia tercermin dalam ikrar Sumpah Pemuda pada tanggal 28 Oktober 1928. Yang menyatakan bahwa putra dan putri Indonesia ...",
        [
          new AnswerChoiceModel(
            "A",
            "Mengaku bertumpah darah satu tanah air Indonesia, mengaku berbangsa satu bangsa Indonesia, mengaku berbahasa satu bahasa Indonesia"
          ),
          new AnswerChoiceModel(
            "B",
            "Mengaku bertumpah darah satu tanah air Indonesia, mengaku berbangsa satu bangsa Indonesia, menjunjung bahasa persatuan bahasa Indonesia"
          ),
          new AnswerChoiceModel(
            "C",
            "Mengaku bertanah air satu tanah air Indonesia, mengaku berbangsa satu bangsa Indonesia, mengaku berbahasa satu bahasa Indonesia"
          ),
          new AnswerChoiceModel(
            "D",
            "Mengaku bertanah air satu tanah air Indonesia, mengaku berbangsa satu bangsa Indonesia, menjunjung bahasa persatuan bahasa Indonesia"
          ),
          new AnswerChoiceModel(
            "E",
            "Mengaku bertumpah darah satu tanah air Indonesia, mengaku bernusa satu nusa bangsa Indonesia, menjunjung bahasa persatuan bahasa Indonesia"
          ),
        ]
      ),
      new QuestionModel(
        "24",
        "twk",
        "Indonesia adalah negara kepulauan yang memiliki keragaman budaya, ras, suku bangsa, kepercayaan, agama, dan bahasa. Sesuai semboyan Bhineka Tunggal Ika, maka meskipun memiliki keragaman budaya, Indonesia tetap satu. Keragaman yang ada di Indonesia adalah kekayaan dan keindahan bangsa Indonesia. Bahasa daerah merupakan salah satu keanekaragaman yang terdapat di Indonesia dan masyarakat saling menghormati dalam penggunaannya. Respons yang paling tepat yang sesuai dengan konsep kebhinnekaan adalah lantaran Bahasa daerah sebagai ...",
        [
          new AnswerChoiceModel("A", "Pembeda dengan negara lain"),
          new AnswerChoiceModel("B", "Kekayaan budaya nasional"),
          new AnswerChoiceModel("C", "Warisan nenek moyang"),
          new AnswerChoiceModel("D", "Ciri khas negara"),
          new AnswerChoiceModel("E", "Keunikan negara "),
        ]
      ),
      new QuestionModel("25", "twk", "Kedudukan MPR berdasarkan UUD 1945 hasil Amandemen dibandingkan dengan lembaga negara lainnya adalah...", [
        new AnswerChoiceModel("A", "Lebih rendah"),
        new AnswerChoiceModel("B", "Lebih kuat"),
        new AnswerChoiceModel("C", "Lebih tinggi"),
        new AnswerChoiceModel("D", "Lebih lemah"),
        new AnswerChoiceModel("E", "Sejajar"),
      ]),
      new QuestionModel(
        "26",
        "twk",
        "Menurut UU No. 32 Tahun 2004, urusan pemerintahan yang tetap menjadi kewenangan utama pemerintah pusat antara lain, kecuali...",
        [
          new AnswerChoiceModel("A", "Masalah politik luar negeri"),
          new AnswerChoiceModel("B", "Pertahanan dan keamanan"),
          new AnswerChoiceModel("C", "Masalah yustisi (peradilan dan hukum) "),
          new AnswerChoiceModel("D", "Masalah moneter dan fiskal nasional"),
          new AnswerChoiceModel("E", "Masalah sosial "),
        ]
      ),
      new QuestionModel(
        "27",
        "twk",
        "Laporan Pengamatan Daerah Pemukiman Transmigrasi Transabangdep, singkatan dari Transmigrasi Swakarsa Pengembangan Desa Potensial, merupakan upaya penataan dan pengembangan desa di daerah transmigrasi yang masih memiliki sumber daya alam untuk dikembangkan. Lokasi pemukiman Transabangdep yang dikembangkan tahun 1992/1993 adalah Desa Sumber Baru dan Sumber Harapan, Provinsi Kalimantan Selatan dengan rencana penempatan 250 KK. Desa Sumber Baru dan Sumber Harapan merupakan desa berdampingan yang pertumbuhannya relatif lambat akibat kurangnya penduduk yang memiliki keterampilan untuk mengolah dan mengembangkan potensi sumber daya alam yang tersedia. Untuk memenuhi penduduk sesuai dengan keterampilan dan jenis usaha yang dibutuhkan bagi pembangunan desa-desa tersebut masyarakat mengharapkan dikembangkannya Program Transmigrasi Swakarsa. Lokasi Desa Sumber Baru dan Sumber Harapan dapat dicapai dengan kendaraan angkutan umum serta ojek. Fasilitas yang tersedia di desa ini adalah 2 unit SD Negeri, 1 unit Puskesmas Pembantu, 2 unit masjid, dan 3 surau.       Tanggapan yang tepat terhadap penggalan laporan di atas adalah .... ",
        [
          new AnswerChoiceModel(
            "A",
            "Transmigrasi Swakarsa Pengembangan Desa Potensial perlu dikembangkan untuk kemajuan Desa Sumber Baru dan Sumber Harapan."
          ),
          new AnswerChoiceModel("B", "Fasilitas umum yang telah tersedia di Desa Sumber Baru dan Sumber Harapan sudah lengkap dan sempurna."),
          new AnswerChoiceModel("C", "Pertumbuhan dan kemajuan Desa Sumber Baru dan Sumber Harapan relatif lambat karena kurangnya penduduk."),
          new AnswerChoiceModel("D", "Dengan fasilitas yang disediakan pasti akan menjamin keberhasilan pengembangan Desa Sumber Baru dan Sumber Harapan. "),
          new AnswerChoiceModel("E", "Penggalan laporan tersebut sudah mencerminkan kesempurnaan sebuah laporan. "),
        ]
      ),
      new QuestionModel(
        "28",
        "twk",
        "Akhir-akhir ini media massa sering memuat foto seksi artis, tetapi para artis tersebut membantah bahwa itu hanya teknik canggih yang dikuasai fotografer. Kalimat opini yang tepat sesuai ilustrasi di atas adalah ....",
        [
          new AnswerChoiceModel("A", `Saya membaca berita yang serupa itu kemarin di surat kabar "Jawa Pos" tanggal 23 Juli 1999.`),
          new AnswerChoiceModel("B", "Berani sekali para artis itu berfoto seperti itu, padahal foto seperti itu akan membuat nama mereka tercemar."),
          new AnswerChoiceModel("C", "Sudah lebih sepuluh orang artis berfoto seksi dimuat di surat kabar ibu kota"),
          new AnswerChoiceModel("D", "Artis-artis yang berfoto seksi tersebut tidak semuanya mengaku bahwa itu tubuh asli mereka."),
          new AnswerChoiceModel("E", "Salah seorang artis berfoto seksi itu telah dipanggil ke kepolisian karena dianggap melanggar kesusilaan."),
        ]
      ),
      new QuestionModel(
        "29",
        "twk",
        "OSIS SMU 3 Sukabumi sedang mengadakan rapat tentang rencana kegiatan karya wisata ke Bali pada hari libur akhir caturwulan 3. Beberapa orang peserta rapat mengemukakan pendapatnya terhadap rencana karya wisata tersebut. Pengungkapan pendapat yang paling tepat adalah .... ",
        [
          new AnswerChoiceModel("A", "Saudara ketua, saya sangat setuju karya wisata ke Bali, asal sebagian besar biayanya ditanggung oleh sekolah."),
          new AnswerChoiceModel(
            "B",
            "Saudara ketua, saya tidak setuju karya wisata ke Bali, karena sudah banyak siswa sekolah kita yang pernah berkunjung ke Bali."
          ),
          new AnswerChoiceModel(
            "C",
            "Saudara ketua, saya tidak setuju karya wisata ke Bali karena pertama, memerlukan biaya besar, kedua memerlukan waktu yang lama, ketiga belum tentu banyak yang berminat."
          ),
          new AnswerChoiceModel(
            "D",
            "Saudara ketua, saya tidak setuju karya wisata ke Bali, karena daerah wisata di wilayah kita juga masih banyak yang lebih indah dan menarik daripada Bali."
          ),
          new AnswerChoiceModel(
            "E",
            "Saudara ketua, saya sangat setuju karya wisata ke Bali, karena saya belum pernah ke Bali dan kebetulan saya sudah punya tabungan untuk biayanya."
          ),
        ]
      ),
      new QuestionModel(
        "30",
        "twk",
        `Tanggapan peserta seminar: "Saya kurang setuju kalau dikatakan bahwa penyebab utama banyaknya transmigran yang kembali ke daerah asal disebabkan oleh faktor mental para transmigran. Apakah yang Saudara maksudkan dengan faktor mental tersebut?" Kalimat jawaban berikut yang tidak tepat adalah .... `,
        [
          new AnswerChoiceModel("A", "Transmigran tidak biasa bekerja keras."),
          new AnswerChoiceModel("B", "Transmigran kurang tahan hidup menderita."),
          new AnswerChoiceModel("C", "Transmigran lebih senang hidup dekat dengan keluarga."),
          new AnswerChoiceModel("D", "Transmigran kurang diperhatikan oleh pemerintah."),
          new AnswerChoiceModel("E", "Transmigran ingin cepat memperoleh hasil."),
        ]
      ),
      new QuestionModel("31", "tiu", "FIKTIF = .....", [
        new AnswerChoiceModel("A", "Realita"),
        new AnswerChoiceModel("B", "Prosa"),
        new AnswerChoiceModel("C", "Imajinatif"),
        new AnswerChoiceModel("D", "Friksi"),
        new AnswerChoiceModel("E", "Argumentatif"),
      ]),
      new QuestionModel("32", "tiu", "NEGOSIASI = .....", [
        new AnswerChoiceModel("A", "Penawaran"),
        new AnswerChoiceModel("B", "Perencanaan"),
        new AnswerChoiceModel("C", "Perbincangan"),
        new AnswerChoiceModel("D", "Perundingan"),
        new AnswerChoiceModel("E", "Kesepakatan"),
      ]),
      new QuestionModel("33", "tiu", "KAPABEL >< ...", [
        new AnswerChoiceModel("A", "Rajin"),
        new AnswerChoiceModel("B", "Mahir"),
        new AnswerChoiceModel("C", "Bodoh"),
        new AnswerChoiceModel("D", "Ceroboh"),
        new AnswerChoiceModel("E", "Pandai"),
      ]),
      new QuestionModel("34", "tiu", "GENTAR >< ...", [
        new AnswerChoiceModel("A", "Berani"),
        new AnswerChoiceModel("B", "Takut"),
        new AnswerChoiceModel("C", "Ragu"),
        new AnswerChoiceModel("D", "Maju"),
        new AnswerChoiceModel("E", "Tantang"),
      ]),
      new QuestionModel("35", "tiu", "KARDIOLOGI : JANUTNG =", [
        new AnswerChoiceModel("A", "Biologi : Ilmu"),
        new AnswerChoiceModel("B", "Farmakologi : Obat-obatan"),
        new AnswerChoiceModel("C", "Teknologi : Teknisi"),
        new AnswerChoiceModel("D", "Akuntansi : Manajemen"),
        new AnswerChoiceModel("E", "Phatologi : Peta"),
      ]),
      new QuestionModel("36", "tiu", "ACEH : SERAMBI MEKAH", [
        new AnswerChoiceModel("A", "Madonna : Seksi"),
        new AnswerChoiceModel("B", "Obama : Presiden"),
        new AnswerChoiceModel("C", "Jakarta : DKI"),
        new AnswerChoiceModel("D", "Bandung : Padjajaran"),
        new AnswerChoiceModel("E", "Mike Tyson : Si leher beton"),
      ]),
      new QuestionModel("37", "tiu", "Hasil kali 3 bilangan bulat berurutan adalah 210, maka jumlah dari dua bilangan terkecil adalah?", [
        new AnswerChoiceModel("A", "11"),
        new AnswerChoiceModel("B", "12"),
        new AnswerChoiceModel("C", "13"),
        new AnswerChoiceModel("D", "15"),
        new AnswerChoiceModel("E", "18"),
      ]),
      new QuestionModel("38", "tiu", "31,3^2 - 31,2^2 = ...", [
        new AnswerChoiceModel("A", "37,44"),
        new AnswerChoiceModel("B", "30,54"),
        new AnswerChoiceModel("C", "30,64"),
        new AnswerChoiceModel("D", "6"),
        new AnswerChoiceModel("E", "6,25"),
      ]),
      new QuestionModel(
        "39",
        "tiu",
        "Pak Waris memiliki sebidang tanah dimana 2/5 bagian tanah dibangun menjadi gudang, 1/4 bagian dijadikan kolam ikan, dan sisanya dijadikan pekarangan bunga. Jika luas pekarangan bunga adalah 112 m2, berapa m2 luas keseluruhan tanah Pak Waris?",
        [
          new AnswerChoiceModel("A", "280"),
          new AnswerChoiceModel("B", "320"),
          new AnswerChoiceModel("C", "326"),
          new AnswerChoiceModel("D", "450"),
          new AnswerChoiceModel("E", "480"),
        ]
      ),
      new QuestionModel("40", "tiu", "Manakah bilangan pecahan di bawah ini yang lebih besar dari 1/3 ?", [
        new AnswerChoiceModel("A", "20/61"),
        new AnswerChoiceModel("B", "16/45"),
        new AnswerChoiceModel("C", "23/100"),
        new AnswerChoiceModel("D", "51/154"),
        new AnswerChoiceModel("E", "71/214"),
      ]),
      new QuestionModel("41", "tiu", "Jika perbandingan 2x – y terhadap x + y adalah 3/4 , maka perbandingan x terhadap y adalah…", [
        new AnswerChoiceModel("A", "7:5"),
        new AnswerChoiceModel("B", "5:7"),
        new AnswerChoiceModel("C", "4:5"),
        new AnswerChoiceModel("D", "5:4"),
        new AnswerChoiceModel("E", "3:4"),
      ]),
      new QuestionModel(
        "42",
        "tiu",
        "Apabila suatu pekerjaan diselesaikan oleh 16 orang dalam 4 hari, berapa orang tambahan yang dibutuhkan untuk menyelesaikan pekerjaan tersebut hanya dengan 1 hari?",
        [
          new AnswerChoiceModel("A", "64"),
          new AnswerChoiceModel("B", "50"),
          new AnswerChoiceModel("C", "48"),
          new AnswerChoiceModel("D", "30"),
          new AnswerChoiceModel("E", "28"),
        ]
      ),
      new QuestionModel(
        "43",
        "tiu",
        "Seseorang membuat bak penampungan air sementara dengan ukuran panjang 130 cm, lebar 90 cm, dan kedalaman 70 cm. apabila tebal bak beton tersebut adalah 5 cm, berapa literkah volume bak penampungan tersebut bila airnya penuh?",
        [
          new AnswerChoiceModel("A", "624 liter"),
          new AnswerChoiceModel("B", "819 liter"),
          new AnswerChoiceModel("C", "672 liter"),
          new AnswerChoiceModel("D", "576 liter"),
          new AnswerChoiceModel("E", "442 liter"),
        ]
      ),
      new QuestionModel(
        "44",
        "tiu",
        "Arkeolog mengatakan bahwa 2 peti koin emas yang ditemukannya berumur 9 abad 11 dasawarsa; dan 3,25 windu 2 lustrum. Berapa tahunkah sebenarnya umur koin-koin tersebut?",
        [
          new AnswerChoiceModel("A", "956"),
          new AnswerChoiceModel("B", "1046"),
          new AnswerChoiceModel("C", "1166"),
          new AnswerChoiceModel("D", "1276"),
          new AnswerChoiceModel("E", "1366"),
        ]
      ),
      new QuestionModel(
        "45",
        "tiu",
        "Sebuah drum berbentuk silinder yang berdiameter 50 cm diisi minyak tanah. Ketika terisi penuh, volumenya adalah 19,625 cm^3. Setelah minyak tanah diambil sebagian, volumenya menjadi 7,850 cm^3. Berapa ketinggian minyak tanah yang berkurang ? (pi = 3,14)",
        [
          new AnswerChoiceModel("A", "5 cm"),
          new AnswerChoiceModel("B", "6 cm"),
          new AnswerChoiceModel("C", "7 cm"),
          new AnswerChoiceModel("D", "10 cm"),
          new AnswerChoiceModel("E", "12 cm"),
        ]
      ),
      new QuestionModel("46", "tiu", "Luas permukaan setengah bola pejal yang memiliki diameter 60 cm adalah ? (pi = 3,14)", [
        new AnswerChoiceModel("A", "3,789 cm^2"),
        new AnswerChoiceModel("B", "3,800 cm^2"),
        new AnswerChoiceModel("C", "8,478 cm^2"),
        new AnswerChoiceModel("D", "3,980 cm^2"),
        new AnswerChoiceModel("E", "4,120 cm^2"),
      ]),
      new QuestionModel("47", "tiu", "Jumlah semua bilangan asli antara 1 dan 100 yang habis dibagi 3 adalah ...", [
        new AnswerChoiceModel("A", "99"),
        new AnswerChoiceModel("B", "1684"),
        new AnswerChoiceModel("C", "1683"),
        new AnswerChoiceModel("D", "33"),
        new AnswerChoiceModel("E", "1685"),
      ]),
      new QuestionModel(
        "48",
        "tiu",
        "Arya sedang menumpuk kursi yang tingginya masing-masing 90cm. Tinggi tumpukan dua kursi 96 cm, dan tumpukan tiga kursi 102cm. Tinggi tumpukan 10 kursi adalah ...cm.",
        [
          new AnswerChoiceModel("A", "154"),
          new AnswerChoiceModel("B", "721"),
          new AnswerChoiceModel("C", "234"),
          new AnswerChoiceModel("D", "112"),
          new AnswerChoiceModel("E", "144"),
        ]
      ),
      new QuestionModel("49", "tiu", "4096, 1024, 256, 64, 16, 4, … ?", [
        new AnswerChoiceModel("A", "1"),
        new AnswerChoiceModel("B", "1/2"),
        new AnswerChoiceModel("C", "2/4"),
        new AnswerChoiceModel("D", "3/4"),
        new AnswerChoiceModel("E", "5/4"),
      ]),
      new QuestionModel("50", "tiu", "Jumlah 7 suku pertama deret 4,14, 24, 34 … adalah …", [
        new AnswerChoiceModel("A", "228"),
        new AnswerChoiceModel("B", "238"),
        new AnswerChoiceModel("C", "248"),
        new AnswerChoiceModel("D", "258"),
        new AnswerChoiceModel("E", "268"),
      ]),
      new QuestionModel("51", "tiu", "Jumlah angka ganjul antara 28 sampai 40 adalah ...", [
        new AnswerChoiceModel("A", "202"),
        new AnswerChoiceModel("B", "203"),
        new AnswerChoiceModel("C", "204"),
        new AnswerChoiceModel("D", "205"),
        new AnswerChoiceModel("E", "212"),
      ]),
      new QuestionModel(
        "52",
        "tiu",
        "Sally, Sherly, Laura, Tomi, dan Sandy masing-masing mengambil permen dari sebuah mangkok. Pertama, empat anak mengambil permen rasa susu. Kemudian Sherly dan Tomi tidak mengambil permen rasa coklat seperti yang dilakukan anak lainnya. Sherly hanya mengambil satu permen, yaitu permen rasa anggur. Setelah itu, selain Sherly hanya Sally dan Sandy yang tidak mengambil permen rasa kopi. Siapakah yang mengambil satu buah permen rasa kopi dan satu buah permen rasa susu?",
        [
          new AnswerChoiceModel("A", "Tomi"),
          new AnswerChoiceModel("B", "Sally"),
          new AnswerChoiceModel("C", "Sherly"),
          new AnswerChoiceModel("D", "Laura"),
          new AnswerChoiceModel("E", "Sandy"),
        ]
      ),
      new QuestionModel(
        "53",
        "tiu",
        "Sally, Sherly, Laura, Tomi, dan Sandy masing-masing mengambil permen dari sebuah mangkok. Pertama, empat anak mengambil permen rasa susu. Kemudian Sherly dan Tomi tidak mengambil permen rasa coklat seperti yang dilakukan anak lainnya. Sherly hanya mengambil satu permen, yaitu permen rasa anggur. Setelah itu, selain Sherly hanya Sally dan Sandy yang tidak mengambil permen rasa kopi. Siapa yang mengambil tiga permen?",
        [
          new AnswerChoiceModel("A", "Sandy"),
          new AnswerChoiceModel("B", "Sally"),
          new AnswerChoiceModel("C", "Sherly"),
          new AnswerChoiceModel("D", "Laura"),
          new AnswerChoiceModel("E", "Tomi"),
        ]
      ),
      new QuestionModel(
        "54",
        "tiu",
        "Sally, Sherly, Laura, Tomi, dan Sandy masing-masing mengambil permen dari sebuah mangkok. Pertama, empat anak mengambil permen rasa susu. Kemudian Sherly dan Tomi tidak mengambil permen rasa coklat seperti yang dilakukan anak lainnya. Sherly hanya mengambil satu permen, yaitu permen rasa anggur. Setelah itu, selain Sherly hanya Sally dan Sandy yang tidak mengambil permen rasa kopi. Siapa dua orang yang mengambil permen dengan jumlah dan rasa yang sama?",
        [
          new AnswerChoiceModel("A", "Tomi dan Sandy"),
          new AnswerChoiceModel("B", "Sally dan Laura"),
          new AnswerChoiceModel("C", "Sandy dan Sally"),
          new AnswerChoiceModel("D", "Laura dan Tomi"),
          new AnswerChoiceModel("E", "Sandi dan Laura"),
        ]
      ),
      new QuestionModel(
        "55",
        "tiu",
        "Suatu fungsi f yang dirumuskan dengan  f(x) = ax + b diketahui bahwa f(1) = 5 dan f(–3) = 11. Nilai a dan b berturut-turut adalah...",
        [
          new AnswerChoiceModel("A", "-3/2 dan 13/2"),
          new AnswerChoiceModel("B", "-13/2 dan 3/2"),
          new AnswerChoiceModel("C", "3/2 dan 13/2"),
          new AnswerChoiceModel("D", "-13/2 dan -3/2"),
          new AnswerChoiceModel("E", "3/2 dan -13/2"),
        ]
      ),
      new QuestionModel(
        "56",
        "tiu",
        "Penderita flu maupun batuk yang berobat ke klinik A sebanyak 66 orang, 25 orang menderita flu, dan 15 orang flu juga batuk. Banyak penderita yang hanya menderita batuk adalah ...",
        [
          new AnswerChoiceModel("A", "15"),
          new AnswerChoiceModel("B", "25"),
          new AnswerChoiceModel("C", "35"),
          new AnswerChoiceModel("D", "56"),
          new AnswerChoiceModel("E", "66"),
        ]
      ),
      new QuestionModel(
        "57",
        "tiu",
        "Dalam sebuah kotak berisi kertas yang bertuliskan huruf-huruf dari A sampai Z. Setiap kali pengambilan, kertas yang terpilih dimasukkan kembali ke kotaknya. Dari 130 pengambilan, berapa frekuensi harapan terambilnya huruf vokal?",
        [
          new AnswerChoiceModel("A", "15"),
          new AnswerChoiceModel("B", "18"),
          new AnswerChoiceModel("C", "20"),
          new AnswerChoiceModel("D", "23"),
          new AnswerChoiceModel("E", "25"),
        ]
      ),
      new QuestionModel("58", "tiu", "Peluang munculnya 2 buah dadu yang memiliki jumlah 5 apabila dilempar sebanyak 450 kali adalah…", [
        new AnswerChoiceModel("A", "33,33 kali"),
        new AnswerChoiceModel("B", "66,67 kali"),
        new AnswerChoiceModel("C", "50 kali"),
        new AnswerChoiceModel("D", "83,33 kali"),
        new AnswerChoiceModel("E", "90 kali"),
      ]),
      new QuestionModel("59", "tiu", "Ingkaran dari pernyataan “ Jika Tawang mendapat nilai 10 maka ia diberi hadiah berupa rekreasi menyelam ” adalah", [
        new AnswerChoiceModel("A", "Jika Tawang mendapat nilai 9, maka ia tidak dapat rekreasi."),
        new AnswerChoiceModel("B", "Jika Tawang rekreasi, maka ia mendapat nilai 10"),
        new AnswerChoiceModel("C", "Tawang mendapat nilai 10 tetapi ia tidak rekreasi."),
        new AnswerChoiceModel("D", "Tawangmendapat nilai lebih dari 9 dan ia sedang menyelam"),
        new AnswerChoiceModel("E", "Jika Tawang tidak menyelam maka ia mendapat nilai 9."),
      ]),
      new QuestionModel(
        "60",
        "tiu",
        "Premis 1 : “Jika harga bahan bakar naik, maka ongkos angkutan naik”. Premis 2 : “Jika harga kebutuhan pokok tidak naik, maka ongkos angkutan tidak naik”. Bila kedua pernyataan itu bernilai benar, maka kesimpulan yang dapat diambil adalah ...",
        [
          new AnswerChoiceModel("A", "Jika ongkos naik, harga bahan bakar naik"),
          new AnswerChoiceModel("B", "Jika ongkos angkutan naik maka harga kebutuhan pokok naik."),
          new AnswerChoiceModel("C", "pJika ongkos angkutan tidak naik maka harga kebutuhan pokok naik."),
          new AnswerChoiceModel("D", "Jika harga bahan bakar naik maka harga kebutuhan pokok naik."),
          new AnswerChoiceModel("E", "Jika harga bahan bakar tidak naik maka harga kebutuhan pokok tidak naik."),
        ]
      ),
      new QuestionModel("61", "tiu", "Ingkaran dari pernyataan “ Semua orang suka coklat” adalah ...", [
        new AnswerChoiceModel("A", "Beberapa orang tidak suka coklat."),
        new AnswerChoiceModel("B", "Beberapa orang suka coklat"),
        new AnswerChoiceModel("C", "Tidak semua orang tidak suka coklat"),
        new AnswerChoiceModel("D", "Semua orang tidk suka coklat"),
        new AnswerChoiceModel("E", "Tidak semua orang suka coklat"),
      ]),
      new QuestionModel("62", "tiu", "Kontraposisi dari “jika ani mendapat ranking 1, maka ani akan berlibur ke Bali” adalah ...", [
        new AnswerChoiceModel("A", "Jika ani tidak mendapat ranking 1, maka ani tidak berlibur ke bali."),
        new AnswerChoiceModel("B", "Ani tidak berlibur  ke bali."),
        new AnswerChoiceModel("C", "Jika ani berlibur  ke bali, maka ani tidak mendapat ranking 1"),
        new AnswerChoiceModel("D", "Jika ani tidak berlibur  ke bali, maka ani tidak mendapat ranking 1"),
        new AnswerChoiceModel("E", "Ani mendapat ranking 1, lalu berlibur  ke bali."),
      ]),
      new QuestionModel(
        "63",
        "tiu",
        "Dari 80 orang siswa disurvei untuk memilih tempat liburan Kebun Raya Bogor atau Pantai kuta. Ternyata 48 siswa memilih Kebun Raya Bogor, dan 42 siswa memilih Pantai Kuta, dan 10 orang tidak memilih keduanya. Jumlah siswa yang memilih kedua tempat tersebut adalah ...",
        [
          new AnswerChoiceModel("A", "30"),
          new AnswerChoiceModel("B", "20"),
          new AnswerChoiceModel("C", "24"),
          new AnswerChoiceModel("D", "18"),
          new AnswerChoiceModel("E", "4"),
        ]
      ),
      new QuestionModel("64", "tiu", "Dalam pelemparan sebuah dadu, peluang munculnya mata dadu yang angkanya kurang dari 6 adalah ...", [
        new AnswerChoiceModel("A", "5/6"),
        new AnswerChoiceModel("B", "7/3"),
        new AnswerChoiceModel("C", "6/5"),
        new AnswerChoiceModel("D", "1/3"),
        new AnswerChoiceModel("E", "1/4"),
      ]),
      new QuestionModel("65", "tiu", "Dari 7 jenis kain warna akan dibuat bendera yang terdiri dari 3 warna. Ada berapa bendera yang dapat dibuat?", [
        new AnswerChoiceModel("A", "200"),
        new AnswerChoiceModel("B", "21"),
        new AnswerChoiceModel("C", "12"),
        new AnswerChoiceModel("D", "10"),
        new AnswerChoiceModel("E", "210"),
      ]),
      new QuestionModel(
        "66",
        "tkp",
        "Tempat kerja kamu memiliki peraturan yang melarang penggunaan gadget selama bekerja, tetapi kamu sering mengetahui bahwa rekan kerja maupun atasanmu masih melakukan hal ini. Tentu saja, ini bertentangan dengan hati nurani kamu. Sikap yang paling tepat adalah …",
        [
          new AnswerChoiceModel("A", "Mogok kerja sebagai bentuk protes saya"),
          new AnswerChoiceModel("B", "Biarkan saja pelanggaran tersebut terjadi demi menjaga hubungan dengan rekan lainnya"),
          new AnswerChoiceModel("C", "Sampaikan pelanggaran tersebut pada rekan lainnya"),
          new AnswerChoiceModel("D", "Tegur dan mengingatkan atasan dan rekan kerja tersebut"),
          new AnswerChoiceModel("E", "Ikut-ikutan untuk menunjukan kekompakan demi menjaga toleransi antar sesama pegawai"),
        ]
      ),
      new QuestionModel("67", "tkp", "Atasan saya suka berkata kasar kepada bawahannya, sikap saya?", [
        new AnswerChoiceModel("A", "Menegur atasan saya didepan pegawai agar membuat efek jera "),
        new AnswerChoiceModel("B", "Melaporkan kepada bagian kedisiplinan pegawai"),
        new AnswerChoiceModel("C", "Membuka diskusi santai dengan atasan saya mengenai hal itu sesudah bekerja"),
        new AnswerChoiceModel("D", "Mendiamkan saja karena atasan haruslah dihormati "),
        new AnswerChoiceModel("E", "Berusaha sebaik mungkin agar jangan saya yang diperlakukan seperti itu"),
      ]),
      new QuestionModel(
        "68",
        "tkp",
        "Teman sekerja saya tidak bekerja maksimal, sementara hasil pekerjaannya berhubungan langsung dengan pekerjaan saya, sikap saya?",
        [
          new AnswerChoiceModel("A", "Menegurnya"),
          new AnswerChoiceModel("B", "Memberitahukan kepada atasan, karena saya bukan berada diposisi yang bisa menegur"),
          new AnswerChoiceModel("C", "Mengerjakan pekerjaannya "),
          new AnswerChoiceModel("D", "Jika pekerjaan saya terlambat, maka kesalahan bukan berada di saya"),
          new AnswerChoiceModel("E", "Melaporkan kepada bagian kedisiplinan pegawai"),
        ]
      ),
      new QuestionModel(
        "69",
        "tkp",
        "Kamu merupakan seorang pegawai yang berprestasi di kantor. Karena kinerja dan prestasi yang baik, pimpinan perusahaan memberi kamu kesempatan untuk melanjutkan studi ke luar negeri. Namun, kamu harus membayar sendiri setengah dari total biaya. Kamu dapat menentukan apakah akan menerima atau menolaknya dengan bebas tanpa paksaan. Sikap yang akan kamu ambil ... ",
        [
          new AnswerChoiceModel(
            "A",
            "Menerima tawaran tersebut dengan membiayai sendiri setengahnya dan akan berusaha mencari pendapatan lain saat di luar negeri untuk mencukupi kebutuhan saya"
          ),
          new AnswerChoiceModel(
            "B",
            "Merundingkan terlebih dahulu dengan keluarga karena biaya hidup di luar negeri tidak murah selain itu yang menjadi pertimbangan adalah kekhawatiran keluarga terhadap keadaan saya di luar negeri saat sedang melanjutkan studi "
          ),
          new AnswerChoiceModel(
            "C",
            "Membawa ikut serta anggota keluarga karena saya tidak bisa jauh dari anggota keluarga. Saya siap mencari pekerjaan sambilan untuk membiayai kebutuhan keluarga dan setengah biaya studi "
          ),
          new AnswerChoiceModel(
            "D",
            "pMembawa ikut serta anggota keluar negeri untuk melanjutkan studi karena saya tidak bisa jauh dari anggota keluarga. Biaya kebutuhan keluarga dan biaya studi setengahnya saya ambil dari tabungan yang disisihkan dari gaji dari sejak awal bekerja "
          ),
          new AnswerChoiceModel(
            "E",
            "Memberikan kesempatan kepada rekan kerja yang bersedia karena saya tidak bisa jauh dari keluarga dan tidak memiliki dana untuk membiayai sendiri setengah biaya studi"
          ),
        ]
      ),
      new QuestionModel("70", "tkp", "Saya akan turut memberikan kontribusi terhadap pembangunan nusa dan bangsa Indonesia..", [
        new AnswerChoiceModel("A", "Jika saya berkarya sebagai pegawai negeri sipil "),
        new AnswerChoiceModel("B", "Dimanapun saya berkarya, saya akan turut memberikan kontribusi terhadap pembangunan bangsa "),
        new AnswerChoiceModel("C", "Ketika saya menjadi seorang birokrat tingkat atas "),
        new AnswerChoiceModel("D", "Ketika saya menjabat menjadi anggota Dewan Perwakilan Rakyat, baik tingkat pusat maupun daerah "),
        new AnswerChoiceModel(
          "E",
          "Dimanapun saya berkarya, saya akan turut memberikan kontribusi terhadap pembangunan bangsa dengan syarat didukung oleh pemerintah "
        ),
      ]),
      new QuestionModel("71", "tkp", "Setelah mendapat penghargaan sebagai pegawai paling berprestasi tahun ini, saya?", [
        new AnswerChoiceModel("A", "Puas dengan penghargaan tersebut"),
        new AnswerChoiceModel("B", "Merasa tidak percaya bila saya mendapatkan penghargaan tesebut"),
        new AnswerChoiceModel("C", "Memberitahukan kepada seluruh keluarga berita bahagia ini "),
        new AnswerChoiceModel("D", "Saya bertanya-tanya mungkinkah tahun depan akan mendapatkannya lagi"),
        new AnswerChoiceModel("E", "Saya senang dan berupaya untuk lebih berprestasi lagi"),
      ]),
      new QuestionModel(
        "72",
        "tkp",
        "Instansi kantor anda mengadakan training yang sangat bermanfaat bagi peningkatan kemampuan anda, namun training tersebut diadakan pada hari sabtu dan minggu?",
        [
          new AnswerChoiceModel("A", "Lebih baik saya mengikuti training yang diadakan bukan pada hari libur"),
          new AnswerChoiceModel("B", "Hari libur sabtu dan minggu adalah hak pegawai untuk libur dari urusan"),
          new AnswerChoiceModel("C", "Saya bersedia mengorbankan dua hari libur tersebut untuk mengikuti training"),
          new AnswerChoiceModel("D", "Saya bersedia mengikuti training namun hanya hari Sabtu saja"),
          new AnswerChoiceModel("E", "Saya menyarankan pegawai lain yang masih lajang saja untuk mengikuti training tersebut"),
        ]
      ),
      new QuestionModel(
        "73",
        "tkp",
        "Saya ditugaskan untuk memimpin tim kerja dengan batas waktu yang sangat ketat.Anggota tim kerja memperlihatkan sikap tidak peduli dengan tugas yang diemban. Sikap saya adalah",
        [
          new AnswerChoiceModel("A", "Bekerja sendiri yang penting tugas selesai "),
          new AnswerChoiceModel("B", "Mengancam mengeluarkan anggota yang tidak serius dari tim kerja "),
          new AnswerChoiceModel("C", "Melaporkan mereka pada pimpinan agar diberi sanksi "),
          new AnswerChoiceModel("D", "Membagi tugas secara adil dan memotivasi serta menegur anggota untuk menyelesaikannya "),
          new AnswerChoiceModel("E", "Menasehati mereka agar sadar akan penyelesaian tugas yang diembannya"),
        ]
      ),
      new QuestionModel("74", "tkp", "Jika Anda melihat ada anak kecil yang mengemis, maka Anda akan...", [
        new AnswerChoiceModel("A", "Bertanya apakah ia masih punya orang tua "),
        new AnswerChoiceModel("B", "Bertanya apakah ia masih sekolah"),
        new AnswerChoiceModel("C", "Saya tidak pernah memperdulikannya"),
        new AnswerChoiceModel("D", "Memberinya uang karena saya kasihan"),
        new AnswerChoiceModel("E", "Membawanya ke panti asuhan "),
      ]),
      new QuestionModel("75", "tkp", "Anda sedang menyelesaikan pekerjaan Anda saat kantor hampir tutup, maka Anda akan...", [
        new AnswerChoiceModel("A", "Menunda penyelesaian pekerjaan tersebut"),
        new AnswerChoiceModel("B", "Ikut rekan Anda yang mulai mengemasi barang-barangnya"),
        new AnswerChoiceModel("C", "Tetap berada di kantor hingga pekerjaan tersebut selesai jika ada uang lembur"),
        new AnswerChoiceModel("D", "Tetap berada di kantor hingga pekerjaan selesai walau tanpa uang lembur"),
        new AnswerChoiceModel("E", "Membawa pekerjaan tersebut ke rumah saja"),
      ]),
      new QuestionModel(
        "76",
        "tkp",
        "Bawahan Saya tidak datang ke kantor hari ini. Awalnya ia bilang akan datang di siang hari, tapi dikarenakan anaknya jatuh sakit dan baru mendapatkan obat di siang hari, akhirnya ia memberi kabar bahwa dirinya tidak dapat hadir seharian. Maka yang Saya lakukan sebagai atasannya adalah ...",
        [
          new AnswerChoiceModel("A", "Percaya saja"),
          new AnswerChoiceModel("B", "Mengonfirmasi kepada bagian SDM terkait absensi dan aturan yang berlaku"),
          new AnswerChoiceModel("C", "Berdiskusi dengan bagian SDM dan atasan lain dalam hal accepting klaim ketidakhadiran"),
          new AnswerChoiceModel("D", "Menyarankan untuk meminta surat ke dokter agar ada bukti fisik yang kuat"),
          new AnswerChoiceModel("E", "Menolak secara halus atas klaim tersebut."),
        ]
      ),
      new QuestionModel("77", "tkp", "Anda ditugaskan untuk melakukan dinas luar selama sepekan di daerah yang terpencil, maka Anda akan...", [
        new AnswerChoiceModel("A", "Menolak karena Anda takut"),
        new AnswerChoiceModel("B", "Menyetujuinya jika ada rekan lain yang ikut juga"),
        new AnswerChoiceModel("C", "Menyetujuinya karena Anda belum pernah datang ke sana "),
        new AnswerChoiceModel("D", "Menolaknya karena Anda belum pernah datang ke sana "),
        new AnswerChoiceModel("E", "Menolakya jika rekan yang lain tidak ikut juga"),
      ]),
      new QuestionModel("78", "tkp", "Jika Anda bertemu dengan seorang teman lama yang Anda lupa namanya, maka Anda akan...", [
        new AnswerChoiceModel("A", "Menyapaya"),
        new AnswerChoiceModel("B", "Tersenyum saja"),
        new AnswerChoiceModel("C", "Menyalaminya terlebih dulu"),
        new AnswerChoiceModel("D", "Berbicara padanya tentang apapun yang Anda ingat"),
        new AnswerChoiceModel("E", "Mengacuhkannya"),
      ]),
      new QuestionModel(
        "79",
        "tkp",
        "Kamu dan kedua temanmu diundang oleh teman yang memiliki perbedaan keyakinan untuk datang ke pernikahannya. Sehari sebelum acara, kamu diminta mengenakan pakaian khusus yang dilarang untuk digunakan oleh agama kamu. Apa yang akan kamu lakukan? ",
        [
          new AnswerChoiceModel("A", "Menolaknya dengan tegas dan sopan"),
          new AnswerChoiceModel("B", "Menyetujui tetapi hanya memakainya saat itu saja "),
          new AnswerChoiceModel("C", "Menyetujuinya setelah merundingkannya dengan kedua teman terlebih dahulu agar pakaian ada sedikit perubahan "),
          new AnswerChoiceModel("D", "Menolaknya lalu pura-pura sakit "),
          new AnswerChoiceModel("E", "Menyetujuinya dan bersedia melakukan apa saja sesuai agama dan adat istiadat teman"),
        ]
      ),
      new QuestionModel("80", "tkp", "Ketika atasan saya menyuruh saya untuk mengerjakan pekerjaan yang risikonya besar, maka saya akan...", [
        new AnswerChoiceModel("A", "Takut dan menolaknya"),
        new AnswerChoiceModel("B", "Takut namun tetap menerimanya"),
        new AnswerChoiceModel("C", "Menerimaya dan meminta doanya"),
        new AnswerChoiceModel("D", "Menerimaya dan yakin saya pasti bisa"),
        new AnswerChoiceModel("E", "Menerimanya jika atasan tetap bersikeras "),
      ]),
      new QuestionModel("81", "tkp", "Ketika berada dalam kereta yang penuh dan sesak dengan penumpang, saya biasanya...", [
        new AnswerChoiceModel("A", "Diam saja sambil berdoa semoga bisa lebih baik"),
        new AnswerChoiceModel("B", "Mendengarkan musik"),
        new AnswerChoiceModel("C", "Memainkan telepon genggam saya"),
        new AnswerChoiceModel("D", "Kesal sendiri dan mengutuk pemerintah"),
        new AnswerChoiceModel("E", "Memperhatikan orang-orang di sekitar Anda"),
      ]),
      new QuestionModel("82", "tkp", "Anda mempunyai seorang anak yang amat gemar jajan makanan di luar rumah, maka Anda akan...", [
        new AnswerChoiceModel("A", "Memarahinya yang terus jajan di luar "),
        new AnswerChoiceModel("B", "Mengajaknya untuk memasak makanan bersama "),
        new AnswerChoiceModel("C", "Biasa saja karena ia menginginkannya"),
        new AnswerChoiceModel("D", "Tidak memberikan uang jika dia masih jajan"),
        new AnswerChoiceModel("E", "Memberikan pengertian kepadanya bahwa ia harus berhemat dengan menabung"),
      ]),
      new QuestionModel("83", "tkp", "Jika saya memiliki banyak waktu luang, saya akan...", [
        new AnswerChoiceModel("A", "Melakukan hal yang saya senangi "),
        new AnswerChoiceModel("B", "Mencari pekerjaan sampingan"),
        new AnswerChoiceModel("C", "Memelihara hewan dan tumbuhan di pekarangan"),
        new AnswerChoiceModel("D", "Membaca banyak buku"),
        new AnswerChoiceModel("E", "Menyicil pekerjaan yang deadlinenya masih lama"),
      ]),
      new QuestionModel(
        "84",
        "tkp",
        "Saya baru saja diminta untuk menjalankan sebuah program di kantor. Semua karyawan yang ditugaskan untuk menjalan program wajib membuat laporan kegiatannya. Setelah laporan selesai dibuat, draft laporan yang Saya buat ditolak oleh atasan karena dianggap kurang jelas. Yang harus Saya lakukan adalah...",
        [
          new AnswerChoiceModel(
            "A",
            "Memeriksa kembali draft laporan tersebut terutama pada bagian yang salah sehingga bisa diperbaiki dengan segera untuk diserahkan kembali "
          ),
          new AnswerChoiceModel(
            "B",
            "Menerima kembali draft laporan tersebut tanpa diperiksa kembali. Bisa saja penolakan tersebut dikarenakan kekeliruan atasan saya salah membaca atau keliru dalam menilai laporan yang saya serahkan sehingga nanti saya serahkan kembali"
          ),
          new AnswerChoiceModel(
            "C",
            "Menanyakan rekan kerja yang lain yang ikut membantu menyusun laporan karena bisa saja kesalahan tersebut bukan dari kekeliruan saya namun dikarenakan kesalah rekan kerja, hal ini dilakukan untuk mempercepat memeriksa dan memperbaiki bagian yang salah tanpa diperiksa setiap bagiannya "
          ),
          new AnswerChoiceModel(
            "D",
            "Menerima penolakan tersebut dan mencoba perbaiki kesalahan laporan tersebut. Akan tetapi saya yakin kesalahan draft laporan dikarenakan kekeliruan atasan saya dalam memeriksanya"
          ),
          new AnswerChoiceModel(
            "E",
            "Menjelaskan penyebab terjadinya kesalahan dalam penyusunan laporan tersebut. Waktu pengerjaannya yang sangat singkat dikarenakan sibuk mengatur jalan kegiataan program sehingga waktu dan tenaga banyak terkuras sehingga menyebabkan kurang fokus"
          ),
        ]
      ),
      new QuestionModel("85", "tkp", "Ketika saya memimpin sebuah proyek, saya senang jika memiliki staf yang...", [
        new AnswerChoiceModel("A", "Semangat dalam bekerja"),
        new AnswerChoiceModel("B", "Menyelesaikan pekerjaan sebelum tenggat waktu"),
        new AnswerChoiceModel("C", "Cepat mengerti dan mengetahui maksud saya"),
        new AnswerChoiceModel("D", "Bisa diatur dengan baik"),
        new AnswerChoiceModel("E", "Kritis dan suka memberi saran bagi proyek kami"),
      ]),
      new QuestionModel("86", "tkp", "Saya senang jika saya memiliki kesempatan untuk berkunjung ke kota yang...", [
        new AnswerChoiceModel("A", "Bersejarah"),
        new AnswerChoiceModel("B", "Pusat ilmu pengetahuan"),
        new AnswerChoiceModel("C", "Indah"),
        new AnswerChoiceModel("D", "Nyaman"),
        new AnswerChoiceModel("E", "Tertib"),
      ]),
      new QuestionModel("87", "tkp", "Jika Anda memiliki waktu luang, biasanya Anda akan..", [
        new AnswerChoiceModel("A", "Membaca novel"),
        new AnswerChoiceModel("B", "Mendengarkan siaran radio"),
        new AnswerChoiceModel("C", "Menonton TV"),
        new AnswerChoiceModel("D", "Berkebun"),
        new AnswerChoiceModel("E", "Membaca buku"),
      ]),
      new QuestionModel("88", "tkp", "Ketika Anda memutuskan untuk merekrut seseorang sebagai pegawai Anda, maka Anda akan merekrut orang yang…", [
        new AnswerChoiceModel("A", "Berpindidikan tinggi"),
        new AnswerChoiceModel("B", "Lulus universitas terkenal"),
        new AnswerChoiceModel("C", "Berpengalaman"),
        new AnswerChoiceModel("D", "Mandiri"),
        new AnswerChoiceModel("E", "Pekerja keras"),
      ]),
      new QuestionModel("89", "tkp", "Opini yang dilarang untuk disampaikan adalah opini yang bertemakan...", [
        new AnswerChoiceModel("A", "Berbagai hal yang dapat menyinggung perasaan orang lain."),
        new AnswerChoiceModel("B", "Berbagi hal yang mengancam keutuhan kelompok."),
        new AnswerChoiceModel("C", "Berbagai hal yang bertemakan SARA. "),
        new AnswerChoiceModel("D", "Opini yang mengandung unsur dendam pribadi."),
        new AnswerChoiceModel("E", "Opini yang berusaha menghadirkan suasana humoris."),
      ]),
      new QuestionModel("90", "tkp", "Jika tim anda mendapatkan opini atau bahkan kritik yang tajam dari kelompok lain maka sikap anda adalah...", [
        new AnswerChoiceModel("A", "Mendengarkan secara seksama kritik tersebut."),
        new AnswerChoiceModel("B", "Menerima kritik tersebut sebagai bahan acuan untuk introspeksi diri dan kelompok."),
        new AnswerChoiceModel("C", "Mendengarkan kritik tersebut kemudian bersiap untuk mengkritik lebih tajam. "),
        new AnswerChoiceModel("D", "Mendengarkan kritik tersebut dengan menahan rasa malu karena merasa gagal menjadi bagian dari kelompok yang dikritik."),
        new AnswerChoiceModel("E", "Menganggap kritik sebagai hal yang lumrah di alam demokrasi."),
      ]),
      new QuestionModel("91", "tkp", "Ketika wabah hama menyerang seluruh tanaman di desa anda, maka yang akan anda lakukan adalah...", [
        new AnswerChoiceModel(
          "A",
          "Mengambil sampel hama dan tanaman, kemudian mengajak warga lainnya mencari informasi dan bantuan untuk menanggulangi masalah tersebut."
        ),
        new AnswerChoiceModel("B", "Bekerjasama dengan warga mengatasi wabah hama tersebut."),
        new AnswerChoiceModel("C", "Membuat upacara adat, memohon dihilangkan dari bencana."),
        new AnswerChoiceModel("D", "Memusnahkan semua ladang dan menggantikannya dengan rumah atau mall. "),
        new AnswerChoiceModel("E", "Memanfaatkan hama tersebut menjadi makanan"),
      ]),
      new QuestionModel(
        "92",
        "tkp",
        "Anda baru dipindahkan ke unit kerja yang pegawainya sering membolos. Hal ini tentu sangat mengganggu jalannya operasional kantor.Maka sebagai kepala unit yang akan anda lakukan adalah? ",
        [
          new AnswerChoiceModel("A", "Memberikan surat peringatan."),
          new AnswerChoiceModel("B", "Menanyakan alasan mereka membolos dan memberikan nasehat untuk tidak mengulanginya lagi."),
          new AnswerChoiceModel("C", "Menasehati mereka agar sadar akan kewajibannya. "),
          new AnswerChoiceModel("D", "Mengancam akan mengeluarkan pegawai tersebut"),
          new AnswerChoiceModel("E", "Memarahinya tiap kali membolos"),
        ]
      ),
      new QuestionModel(
        "93",
        "tkp",
        "Anda diminta atasan untuk membenahi atau merevisi peraturan perusahaan yang berkaitan dengan efisiensi keuangan. Maka hal-hal yang akan anda revisi adalah? ",
        [
          new AnswerChoiceModel("A", "Melihat efisiensi jam operasional. Jika memungkinkan mengubah jumlah hari kerja, dari 6 hari menjadi 5 hari."),
          new AnswerChoiceModel("B", "Membatasi jumlah pemakaian telepon."),
          new AnswerChoiceModel("C", "Efisiensi penggunaan listrik dan internet."),
          new AnswerChoiceModel("D", "Melakukan pemotongan kompensasi uang makan pada karyawan yang datang terlambat."),
          new AnswerChoiceModel("E", "Efisiensi penggunaan kendaraan operasional sebagai sarana antar jemput karyawan. "),
        ]
      ),
      new QuestionModel(
        "94",
        "tkp",
        "Kantor anda akan mengadakan bakti sosial di daerah padat penduduk. Agar acara tersebut berjalan dengan lancar yang akan anda perhatikan adalah?",
        [
          new AnswerChoiceModel("A", "Jumlah warga dan bantuan yang akan diberikan."),
          new AnswerChoiceModel("B", "Transportasi menuju lokasi."),
          new AnswerChoiceModel("C", "Jenis bantuan dan koordinasi dengan pihak terkait agar acara berlangsung dengan tertib."),
          new AnswerChoiceModel("D", "Tentang perizinan penyelenggaraan acara bakti sosoal"),
          new AnswerChoiceModel("E", "Pendistribusian bantuan."),
        ]
      ),
      new QuestionModel("95", "tkp", "Ketika dalam keramaian pesta yang anda lakukan adalah …", [
        new AnswerChoiceModel("A", "Menikmati hidangan yang disediakan"),
        new AnswerChoiceModel("B", "Mencari rekan kerja anda"),
        new AnswerChoiceModel("C", "Menyapa semua orang yang hadir didalam pesta tersebut"),
        new AnswerChoiceModel("D", "Mengambil gambar gambar dari kamera anda"),
        new AnswerChoiceModel("E", "Bergabung bersama rekan anda sambil berbincang"),
      ]),
      new QuestionModel("96", "tkp", "Ketika anda terburu-buru ada seorang tuna netra yang terlihat kebingungan mencari alamat, maka sikap anda adalah ...", [
        new AnswerChoiceModel("A", "Melaporkannya pada pihak keamanan agar mendapat bantuan"),
        new AnswerChoiceModel("B", "Membantunya mencari alamat"),
        new AnswerChoiceModel("C", "Berpura pura tidak tahu"),
        new AnswerChoiceModel("D", "Memberikannya sejumlah uang"),
        new AnswerChoiceModel("E", "Meminta tuna netra tersebut pulang kembali kerumah "),
      ]),
      new QuestionModel(
        "97",
        "tkp",
        "Anda sangat menyukai musik dangdut dan ingin menyetelnya dengan volume yang keras, akan tetapi rekan kerja anda tidak menyukai musik tersebut. Maka tindakan anda adalah ...",
        [
          new AnswerChoiceModel("A", "Tetap menyetel radio anda dengan suara keras"),
          new AnswerChoiceModel("B", "Mendengarkan suara musik dengan suara pelan "),
          new AnswerChoiceModel("C", "Meminta rekan anda menyukai musik dangdut"),
          new AnswerChoiceModel("D", "Meminta rekan anda agar tidak mempersoalkan masalah tersebut "),
          new AnswerChoiceModel("E", "Memaksa agar rekan kerja anda menyukai musik dangdut"),
        ]
      ),
      new QuestionModel("98", "tkp", "Ketika Anda memutuskan untuk menjadi PNS, maka Anda akan...", [
        new AnswerChoiceModel("A", "Tetap menjadi produktif "),
        new AnswerChoiceModel("B", "Dipasung ide dan gagasannya "),
        new AnswerChoiceModel("C", "Tidak boleh sembarangan beropini lagi "),
        new AnswerChoiceModel("D", "Lebih banyak mencari aman saja"),
        new AnswerChoiceModel("E", "Tetap menjadi kreatif dan inovatif "),
      ]),
      new QuestionModel(
        "99",
        "tkp",
        "anum turut ikut memamerkan karyanya dalam pameran sains di sekolah. Salah satu pengunjung menanyakan proses yang dilakukan Hanum saat menciptakan karyanya. Hanum sudah mencoba menjelaskan, namun agaknya pengunjung itu masih kebingungan.  Apa yang perlu dilakukan Hanum?",
        [
          new AnswerChoiceModel("A", "memberikan penjelasan dan meminta data pengunjung, selanjutnya memberikan informasi tambahan "),
          new AnswerChoiceModel("B", "menekankan penjelasan pada bagian yang kurang dipahami oleh pengunjung"),
          new AnswerChoiceModel("C", "mencoba mengulang kembali penjelasan yang sudah diberikan sebelumnya "),
          new AnswerChoiceModel("D", "menggunakan berbagai media untuk menjelaskan, misalnya dokumentasi saat pembuatan karya "),
          new AnswerChoiceModel("E", "menanyakan kembali bagian mana yang masih dirasakan membingungkan"),
        ]
      ),
      new QuestionModel("100", "tkp", "Ketika saya menjadi orang yang kreatif, maka orang lain akan...", [
        new AnswerChoiceModel("A", "Merendahkan saya "),
        new AnswerChoiceModel("B", "Menganggap remeh saya"),
        new AnswerChoiceModel("C", "Menghormati saya"),
        new AnswerChoiceModel("D", "Mengagumi saya "),
        new AnswerChoiceModel("E", "Menakuti saya"),
      ]),
      new QuestionModel(
        "101",
        "tkp",
        "Anda adalah pemilik percetakan buku yang sedang berkembang. Seorang penulis terkenal memberi Anda naskah novel terbarunya. Anda sangat bersemangat dan telah menunggu lama. Tapi begitu Anda membacanya, plotnya mudah ditebak dan dialognya ditulis dengan buruk. Satu bulan kemudian, penulis tersebut menghubungi Anda untuk menanyakan persetujuan. Maka Anda akan ...",
        [
          new AnswerChoiceModel(
            "A",
            "Mengatakan kepadanya bahwa saya benar-benar terpesona dan dia harus segera mengirimkannya ke saya untuk segera diterbitkan"
          ),
          new AnswerChoiceModel(
            "B",
            "Memberikan saran dan komentar kepadanya bahwa pasti akan banyak hal sulit yang telah ia lalui ketika menulis novel tersebut, secara hati-hati saya akan menyarankan beberapa perbaikan dan sampaikan juga bahwa mungkin perlu diedit kembali agar naskahnya lebih bagus"
          ),
          new AnswerChoiceModel(
            "C",
            "Sampaikan kepadanya bahwa saya lebih suka ke fiksi ilmiah, selain itu saya bukan orang yang tepat untuk dimintai pendapat. Penerbitan saya hanya menerima setelah semua naskah siap untuk dicetak dan dipublikasikan"
          ),
          new AnswerChoiceModel(
            "D",
            "Sampaikan kepadanya bahwa saya belum selesai membaca dan memeriksa semua naskah yang ia berikan karena masih banyak draft yang lebih dahulu masuk untuk diperiksa"
          ),
          new AnswerChoiceModel(
            "E",
            "Karena merasa kurang enak saya meminta kepada pegawai saya untuk menyampaikan kepadanya bahwa naskahnya kurang bagus setelah dibaca dan diperiksa sehingga kurang prospek untuk dipublikasikan"
          ),
        ]
      ),
      new QuestionModel(
        "102",
        "tkp",
        "Kamu memiliki seorang teman yang bercerita dan mengeluh kepada kamu bahwa suaminya telah menjadi pecandu narkoba. Dan dia meminta bantuan karena dia sudah tidak punya cara untuk menghadapi suaminya. Kamu turut prihatin melihat teman yang yang sudah sangat tertekan itu. Kamu memiliki teman yang bekerja di sebuah lembaga penelitian, merehabilitasi pecandu narkoba, maka tindakan kamu ...",
        [
          new AnswerChoiceModel("A", "Memberi nomor telepon teman, agar dia segera mendaftarkan suami nya di rehabilitasi"),
          new AnswerChoiceModel("B", "Memberi nomor teman dan memperkenalkan teman yang bermasalah kepada teman kamu yang bekerja jadi petugas "),
          new AnswerChoiceModel("C", "Menelpon teman dan memintanya mendaftarkan suami teman kamu untuk di rehabilitasi "),
          new AnswerChoiceModel("D", "Menyarankannya agar segera mendaftar di lembaga rehabilitasi tersebut."),
          new AnswerChoiceModel("E", "Tidak melakukan apapun karena dia harusnya tau sendiri tempat merehabilitasi dimana"),
        ]
      ),
      new QuestionModel(
        "103",
        "tkp",
        "Sebagai peserta lomba dalam HUT RI ke-77 di tempat saya bekerja, yang diikuti oleh semua kolega perusahaan, maka saya akan",
        [
          new AnswerChoiceModel("A", "Mendukung acara tersebut karena HUT RI sangat penting"),
          new AnswerChoiceModel("B", "Tidak hanya berpartisipasi saja, harus diadakan program perayaan kemerdekaan"),
          new AnswerChoiceModel("C", "Penting menjaga nama baik didepan kolega"),
          new AnswerChoiceModel("D", "Apapun akan dilakukan demi perusahaan"),
          new AnswerChoiceModel("E", "HUT Kemerdekaan adalah hal penting, tidak boleh terlewat dan harus mengadakan program yang dapat mendukungnya"),
        ]
      ),
      new QuestionModel(
        "104",
        "tkp",
        "Anda adalah seorang kurir yang bertanggung jawab untuk mengantarkan kiriman barang ke rumah pelanggan setiap hari. Anda tidak tahu isi barang yang Anda antarkan, tugas Anda hanya mengantarkannya ke alamat. Suatu hari mereka mengeluh kepada Anda karena barang yang Anda kirimkan salah. Bagaimana sikap anda?",
        [
          new AnswerChoiceModel("A", "Mendengarkan dan menjelaskan bahwa anda hanya kurir yang tugasnya hanya mengantar barang saja"),
          new AnswerChoiceModel("B", "Mendengarkan dan memberikan solusi supaya kejadian ini tidak berulang"),
          new AnswerChoiceModel("C", "Mendengarkan dan minta maaf serta bersedia untuk mengantarkan barang yang tepat secepatnya"),
          new AnswerChoiceModel("D", "Mendengarkan saja supaya dia merasa dipahami setelah itu tidak perlu melakukan apapun "),
          new AnswerChoiceModel("E", "Minta maaf, mendengarkan dan memberitahu ke atasan anda jika ada yang keliru via telepon."),
        ]
      ),
      new QuestionModel(
        "105",
        "tkp",
        "Ketika saya sedang makan siang di jam istirahat, seorang tamu tiba-tiba datang membutuhkan layanan kantor. Rekan saya, yang seharusnya bertugas pada saat itu, tidak ada di sana. Maka, Saya akan?",
        [
          new AnswerChoiceModel("A", "Menelepon teman Saya untuk kembali ke kantor"),
          new AnswerChoiceModel("B", "Segera membantu tamu tersebut sebisa Saya "),
          new AnswerChoiceModel("C", "Meminta orang lain untuk menggantikan tugas rekan kerja Saya menemani tamu"),
          new AnswerChoiceModel("D", "Membiarkan saja karena bukan merupakan tugas Saya."),
          new AnswerChoiceModel("E", "Mempersilahkan tamu tersebut dan memintanya untuk menunggu rekan Saya."),
        ]
      ),
      new QuestionModel(
        "106",
        "tkp",
        "Banyak karyawan di perusahaan yang Anda jalankan mengundurkan diri secara tiba-tiba, termasuk mereka yang berprestasi dan memiliki kinerja baik. Anda tahu bahwa sebagian besar alasan pengunduran diri para karyawan tersebut adalah karena perusahaan yang tidak memberikan kesempatan kepada mereka untuk mengembangkan diri. Di sisi lain, keuangan perusahaan saat ini tidak memungkinkan untuk hal tersebut, namun jika hal ini terus terjadi, maka akan berdampak buruk dan merugikan perusahaan karena telah kehilangan SDM yang baik, sikap anda ...",
        [
          new AnswerChoiceModel("A", "Memberikan karyawan kesempatan untuk mengembangkan diri dengan cara mengikutkan seminar"),
          new AnswerChoiceModel("B", "Memberikan karyawan kesempatan pengembangan diri dengan mengikutkan pelatihan "),
          new AnswerChoiceModel(
            "C",
            "Semua perusahaan ingin karyawannya berkembang tapi karena kondisi keuangan perusahaan sedang tidak mendukung hal ini tidak terhindarkan "
          ),
          new AnswerChoiceModel("D", "Pimpinan sendiri harus memberikan pembekalan tersebut agar karyawan bisa mengembangkan dirinya ke arah yang lebih baik."),
          new AnswerChoiceModel("E", "Pemilik perusahaan harusnya lebih peka terhadap karyawan dan memfasilitasi pengembangan diri mereka"),
        ]
      ),
      new QuestionModel(
        "107",
        "tkp",
        "Tita merupakan manajer pemasaran sebuah aplikasi layanan pelanggan. Hasil penelitian menunjukkan bahwa aplikasi tersebut mendapatkan respon yang baik dari konsumen. Hanya saja bawahannya diganggu oleh pihak asing yang menghubungi dan mengintimidasinya melalui aplikasi tersebut. Hal yang dilakukan Tita adalah ...",
        [
          new AnswerChoiceModel(
            "A",
            "Bekerja sama dengan divisi TI, untuk meningkatkan keamanan aplikasi dan memberi sosialisasi kepada bawahannya terkait sistem pengamanan yang dibuat "
          ),
          new AnswerChoiceModel("B", "Menghentikan penggunaan aplikasi layananan pelanggan karena ia juga pernah mendapat gangguan dari aplikasi tersebut"),
          new AnswerChoiceModel("C", "Menggunakan aplikasi layanan pelanggan saat dibutuhkan karena aplikasi tersebut mudah di lacak pihak luar. "),
          new AnswerChoiceModel(
            "D",
            "Mengimbau kepada bawahannya agar berhati-hati atau menghentikan penggunaan aplikasi layanan pelanggan tersebut sambil mengupayakan peningkatan keamanan aplikasi. "
          ),
          new AnswerChoiceModel("E", "Melanjutkan penggunaan aplikasi layanan pelanggan karena manfaatnya jauh lebih besar daripada gangguan yang terjadi"),
        ]
      ),
      new QuestionModel(
        "108",
        "tkp",
        "Temanmu tidak bisa datang ke kantor karena rumah dan jalan masuk ke kantor tergenang air serta tidak adanya transportasi umum yang lewat. Namun karena rumahmu tidak jauh dari rumah temanmu. Maka yang kamu lakukan adalah ...",
        [
          new AnswerChoiceModel("A", "Menjemputnya dan berangkat bersama sama kekantor"),
          new AnswerChoiceModel("B", "Langsung berangkat kekantor karna takut terlambat "),
          new AnswerChoiceModel("C", "Menelpon teman kamu untuk menanyakan kabar "),
          new AnswerChoiceModel("D", "Memintanya untuk berangkat kekantor walaupun harus jalan kaki "),
          new AnswerChoiceModel("E", "Menghampirinya untuk menanyakan apa ada tugas atau dokumen penting yang harus dibawa ke kantor"),
        ]
      ),
      new QuestionModel(
        "109",
        "tkp",
        "Tasha adalah seorang penjahit dengan banyak pelanggan. Namun ada seorang pelanggan baru yang mengkritiknya karena kurangnya variasi dari model yang Tasha buat. Padahal, sepertinya ia selalu membuat model-model terbaru. Apa yang sebaiknya dilakukan Tasha?",
        [
          new AnswerChoiceModel("A", "Menerima kritikan untuk direnungkan kembali "),
          new AnswerChoiceModel("B", "Tidak terlalu percaya pada kritikan, mungkin saja karena ada pesaing "),
          new AnswerChoiceModel("C", "Mendengarkan kritikan agar pelanggan tidak pindah ke penjahit lain"),
          new AnswerChoiceModel("D", "Membuat beberapa model lain dan mencoba menawarkan ke pelanggan"),
          new AnswerChoiceModel("E", "Mencoba mencari tahu model terkini yang dimaksud pelanggan "),
        ]
      ),
      new QuestionModel(
        "110",
        "tkp",
        "Pada akhir tahun ini, anak Saya mengajak saya berlibur sementara Saya menyewakan semua mobil yang Saya punya. Di rumah, kebetulan sedang ada mobil dinas yang sempat saya gunakan kemarin dan saat ini sedang tidak dipakai. Karena sejak awal liburan saya berniat untuk menyegarkan, maka Saya menggunakan mobil tersebut untuk kepentingan keluarga. Sayangnya, mobil tersebut menabrak tiang sehingga mengalami kerusakan. Menanggapi hal ini, maka saya ...",
        [
          new AnswerChoiceModel("A", "Mengonfirmasi kepada atasan bahwa saya telah melakukan hal itu dan saya siap dengan segala konsekuensi yang ada"),
          new AnswerChoiceModel(
            "B",
            "Diam saja tanpa memberitahukan atasan karena saya masih berharap mobil tersebut sudah siap diperbaiki ketika saya masuk kerja nanti"
          ),
          new AnswerChoiceModel(
            "C",
            "Memperbaiki kendaraan tersebut dan meminta maaf kepada atasan karena saya melakukan kesalahan dan apapun konsekuensi nya saya akan menerimanya dengan lapang dada karena itu adalah tanggung jawab saya"
          ),
          new AnswerChoiceModel(
            "D",
            "Mengakui kesalahan saya kepada atasan, memperbaiki mobil tersebut, dan siap akan konsekuensi yang akan saya dapatkan karena kelalaian"
          ),
          new AnswerChoiceModel("E", "Segera memperbaiki mobil dinas tersebut karena bagaimanapun itu adalah tanggung jawab saya "),
        ]
      ),
    ]),
    new TryoutModel("5", [
      new QuestionModel(
        "1",
        "twk",
        [
          "Semboyan Bhineka Tunggal Ika adalah dasar untuk membangun persatuan dan kesatuan. Berbagai hal dalam kehidupan sehari-hari dan kehidupan bermasyarakat dapat menjadi wujud dari Semboyan ini. Berikut yang merupakan bentuk penerapan dari Bhineka Tunggal Ika adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Hidup saling menghargai tanpa memandang suku, agama, ras dan bahasa"),
          new AnswerChoiceModel("B", "Gotong royong dalam kegiatan-kegiatan bermasyarakat"),
          new AnswerChoiceModel("C", "Menjaga keamanan dan ketertiban bangsa"),
          new AnswerChoiceModel("D", "Membantu sesama ketika mengalami kesusahan"),
          new AnswerChoiceModel("E", "Bertindak anarkis terhadap pelaku tindak kejahatan"),
        ]
      ),
      new QuestionModel(
        "2",
        "twk",
        [
          "Radikalisme agama berakar pada faham keagamaan yang dinamis. Dinamis antara kutub tektualis dan liberalisme. Munculnya radikalisme agama telah menjadi ancaman tersendiri dalam menerapkan nilai- nilai pada ideologi pancasila. Untuk itu, upaya yang bisa dilakukan untuk mencegah radikalisme agama sekaligus sebagai bentuk penting dari pelestarian pancasila adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Memperkuat implementasi pancasila dalam kehidupan keagamaan"),
          new AnswerChoiceModel("B", "Memberikan pengetahuan yang cukup tentang ideologi pancasila"),
          new AnswerChoiceModel("C", "Mengembangkan taman pendidikan Al-Qur'an di masjid-masjid"),
          new AnswerChoiceModel("D", "Memperkuat pembelajaraan agama di pondok pesantren"),
          new AnswerChoiceModel("E", "Mengajarkan agama di sekolah-sekolah"),
        ]
      ),
      new QuestionModel(
        "3",
        "twk",
        [
          "Sejak Maklumat Pemerintah diberlakukan pada 14 November 1945, meskipun masih menggunakan UUD 1945 yang berunsurkan presidensial, pelaksanaannya berganti menjadi sistem pemerintahan parlementer, sehingga di masa ini terjadi penyimpangan konstitusional berikut ini",
        ],
        [
          new AnswerChoiceModel("A", "KNIP berubah fungsi dari pembantu Presiden menjadi badan legislatif yang turut serta menetapkan GBHN"),
          new AnswerChoiceModel("B", "Presiden ialah penyelenggara pemerintahan negara tertinggi di bawah MPR"),
          new AnswerChoiceModel("C", "Presiden tidak bertanggung jawab kepada DPR  "),
          new AnswerChoiceModel("D", "Indonesia adalah negara yang berdasarkan hukum dan tidak berdasarkan kekuasaan belaka "),
          new AnswerChoiceModel("E", "Pemerintahan berdasarkan atas sistem konstitusi, tidak bersifat absolutisme "),
        ]
      ),
      new QuestionModel(
        "4",
        "twk",
        [
          "Setiap negara berada pada daerah tertentu di muka bumi dan memiliki perbatasannya masing-masing. Kekuasaan negara meliputi semua wilayah, tidak hanya tanah, tetapi juga laut di sekitarnya serta angkasa di atasnya. Hal ini termasuk dalam salah satu unsur berdirinya negara, yaitu ...",
        ],
        [
          new AnswerChoiceModel("A", "daratan"),
          new AnswerChoiceModel("B", "tempat"),
          new AnswerChoiceModel("C", "wilayah"),
          new AnswerChoiceModel("D", "samudera"),
          new AnswerChoiceModel("E", "rumah"),
        ]
      ),
      new QuestionModel(
        "5",
        "twk",
        [
          "Bahasa Indonesia memperlihatkan nilai-nilai sosial budaya luhur yang dimiliki bangsa Indonesia. Melalui keluhuran nilai yang ditunjukkan bangsa Indonesia, sepatutnya kita bangga, menjunjung dan mempertahankannya. Hal tersebut mendeskripsikan bahwa bangsa Indonesia merupakan lambang dari ...",
        ],
        [
          new AnswerChoiceModel("A", "Kebanggaan nasional"),
          new AnswerChoiceModel("B", "Identitas nasional"),
          new AnswerChoiceModel("C", "Alat pemersatu bangsa"),
          new AnswerChoiceModel("D", "Alat penghubung"),
          new AnswerChoiceModel("E", "Alat komunikasi luhur"),
        ]
      ),
      new QuestionModel(
        "6",
        "twk",
        [
          "Dalam hal rancangan undang-undang yang telah disetujui bersama DPR tidak disahkan oleh Presiden dalam waktu ... hari semenjak rancangan undang- undang tersebut disetujui, rancangan undang-undang tersebut sah menjadi undang- undang dan wajib diundangkan.",
        ],
        [
          new AnswerChoiceModel("A", "7"),
          new AnswerChoiceModel("B", "14"),
          new AnswerChoiceModel("C", "30"),
          new AnswerChoiceModel("D", "60"),
          new AnswerChoiceModel("E", "90"),
        ]
      ),
      new QuestionModel(
        "7",
        "twk",
        ["Tipe desentralisasi yang bertujuan memberikan kesempatan kepada daerah untuk menggali secara maksimal potensi sumber dana daerah adalah ..."],
        [
          new AnswerChoiceModel("A", "Desentralisasi fiskal"),
          new AnswerChoiceModel("B", "Desentralisasi ekonomi"),
          new AnswerChoiceModel("C", "Desentralisasi pendanaan"),
          new AnswerChoiceModel("D", "Desentralisasi administrasi"),
          new AnswerChoiceModel("E", "Desentralisasi perdagangan"),
        ]
      ),
      new QuestionModel(
        "8",
        "twk",
        ["Paham yang mengutamakan kebebasan individu sebagai pangkal kebahagiaan hidup adalah ..."],
        [
          new AnswerChoiceModel("A", "Liberalisme"),
          new AnswerChoiceModel("B", "Sosialisme"),
          new AnswerChoiceModel("C", "Kapitalisme"),
          new AnswerChoiceModel("D", "Fasisme"),
          new AnswerChoiceModel("E", "Anarkisme"),
        ]
      ),
      new QuestionModel(
        "9",
        "twk",
        [
          "Pengambilan keputusan merupakan perwujudan proses yang terjadi dalam keluarga dan merupakan hasil interaksi antara peran anggota keluarga untuk saling mempengaruhi. Berikut yang merupakan contoh dalam pengambilan keputusan di keluarga yang sesuai dengan demokrasi pancasila, yaitu ...",
        ],
        [
          new AnswerChoiceModel("A", "Mengutamakan pendapat orangtua"),
          new AnswerChoiceModel("B", "Memperhatikan suara terbanyak"),
          new AnswerChoiceModel("C", "Mendahulukan anggota yang muda  "),
          new AnswerChoiceModel("D", "Mengusahakan mufakat"),
          new AnswerChoiceModel("E", "Mewujudkan keputusan rasional"),
        ]
      ),
      new QuestionModel(
        "10",
        "twk",
        [
          "Badan yang bersifat berdikari yang mempunyai kewenangan untuk memberi usul atas pengangkatan hakim agung serta memiliki wewenang lain demi menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim adalah ......",
        ],
        [
          new AnswerChoiceModel("A", "MA"),
          new AnswerChoiceModel("B", "MK"),
          new AnswerChoiceModel("C", "KY"),
          new AnswerChoiceModel("D", "Kekuasaan Kehakiman"),
          new AnswerChoiceModel("E", "MA, MK, dan KY"),
        ]
      ),
      new QuestionModel(
        "11",
        "twk",
        [
          "Gerakan Non-blok adalah organisasi internasional yang terdiri lebih dari 100 negara yang menganggap dirinya tidak terikat dengan kekuatan besar apapun. Indonesia merupakan salah satu dari 100 anggota Negara-Negara non-blok lantaran Indonesia ingin bersifat netral pada percaturan 2 Negara adikuasa, Amerika Serikat dan Rusia. Setelah Perang Dunia II, kedua Negara itu terlibat pada ....",
        ],
        [
          new AnswerChoiceModel("A", "perang ideologi"),
          new AnswerChoiceModel("B", "perlombaan persenjataan"),
          new AnswerChoiceModel("C", "persaingan ekonomi global"),
          new AnswerChoiceModel("D", "ofensif politik"),
          new AnswerChoiceModel("E", "adanya perang antara Amerika Serikat dengan Rusia"),
        ]
      ),
      new QuestionModel(
        "12",
        "twk",
        ["Hukum yang mengatur hak dan kewajiban lembaga - lembaga negara dalam menjalankan tugasnya disebut ..."],
        [
          new AnswerChoiceModel("A", "Hukum Nasional"),
          new AnswerChoiceModel("B", "Hukum Tata Negara "),
          new AnswerChoiceModel("C", "Hukum Administrasi Negara"),
          new AnswerChoiceModel("D", "Hukum Abdi Negara"),
          new AnswerChoiceModel("E", "Hukum Kelembagaan"),
        ]
      ),
      new QuestionModel(
        "13",
        "twk",
        [
          "Salah satu perjuangan yang dilakukan Indonesia pada masa kependudukan Jepang adalah dengan memanfaatkan gerakan PUTERA (pusat tenaga rakyat) demi menumbuhkan semangat nasionalisme dan cinta tanah air. Berikut tokoh-tokoh yang memimpin organisasi ini, kecuali...",
        ],
        [
          new AnswerChoiceModel("A", "K.H. Agus salim"),
          new AnswerChoiceModel("B", "Ir. Soekarno"),
          new AnswerChoiceModel("C", "Mohammad Hatta "),
          new AnswerChoiceModel("D", "K.H. Mas Mansyur"),
          new AnswerChoiceModel("E", "Ki hajar dewantara "),
        ]
      ),
      new QuestionModel(
        "14",
        "twk",
        ["Hak warga negara untuk melaksanakan perkawinan dan membentuk keluarga diatur dalam UUD 1945 Pasal ..."],
        [
          new AnswerChoiceModel("A", "Pasal 25"),
          new AnswerChoiceModel("B", "Pasal 26 Ayat 2"),
          new AnswerChoiceModel("C", "Pasal 27 Ayat 2"),
          new AnswerChoiceModel("D", "Pasal 28B Ayat 1"),
          new AnswerChoiceModel("E", "Pasal 29 Ayat 1 "),
        ]
      ),
      new QuestionModel(
        "15",
        "twk",
        [
          `Salah satu lagu milik koes plus yang berlirik "Orang bilang tanah kita tanah surge, tongkat kayu dan batu jadi tanaman" telah mendeskripsikan betapa suburnya negeri Indonesia. Oleh sebab itu masyarakat Indonesia dapat menunjukkan rasa syukur mereka atas nikmat tersebut dengan cara.....`,
        ],
        [
          new AnswerChoiceModel("A", "Melakukan ekploitasi besar-besaran terhadap sumber daya yang ada  "),
          new AnswerChoiceModel("B", "Menjualnya untuk mendapatkan keuntungan yang besar  "),
          new AnswerChoiceModel("C", "Menyimpannya untuk cadangan kekayaan Negara  "),
          new AnswerChoiceModel("D", "Memanfaatkan kekayaan alam dengan tepat guna "),
          new AnswerChoiceModel("E", "Melakukan penggundulan hutan untuk pemukiman "),
        ]
      ),
      new QuestionModel(
        "16",
        "twk",
        ["Pada tanggal 17 Juli 1944, Jenderal Hideki Tojo meletakkan jabatan sebagai perdana menteri, penggantinya adalah ..."],
        [
          new AnswerChoiceModel("A", "Letnan Jenderal Kumakichi Harada  "),
          new AnswerChoiceModel("B", "Jenderal Itagaki"),
          new AnswerChoiceModel("C", "Mayor Jenderal Yamamoto  "),
          new AnswerChoiceModel("D", "Jenderal Kuniaki Koiso"),
          new AnswerChoiceModel("E", "Letnan Jenderal Nagano "),
        ]
      ),
      new QuestionModel(
        "17",
        "twk",
        [
          "Kebijakan Desentralisasi kepada daerah otonom, meningkatkan kewenangan Pemerintah Daerah untuk mengatur hal - hal yang berkaitan dengan daerahnya, kecuali ...",
        ],
        [
          new AnswerChoiceModel("A", "Agama"),
          new AnswerChoiceModel("B", "Pengaturan Pendapatan Daerah  "),
          new AnswerChoiceModel("C", "Kebijakan Pembangunan  "),
          new AnswerChoiceModel("D", "Budaya"),
          new AnswerChoiceModel("E", "Sosial"),
        ]
      ),
      new QuestionModel(
        "18",
        "twk",
        [
          "Pancasila menjadi petunjuk atau pedoman diberbagai kegiatan kehidupan untuk mengatur kehidupan bernegara dan berbangsa Indonesia merupakan pengertian dari Pancasila sebagai ...",
        ],
        [
          new AnswerChoiceModel("A", "Pandangan hidup"),
          new AnswerChoiceModel("B", "Dasar negara"),
          new AnswerChoiceModel("C", "Ideologi"),
          new AnswerChoiceModel("D", "Norma "),
          new AnswerChoiceModel("E", "Aturan dasar"),
        ]
      ),
      new QuestionModel(
        "19",
        "twk",
        [
          "Negara Indonesia aktif dalam upaya membangun perdamaian dunia, hal tersebut sesuai dengan amanat yang tercantum dalam pembukaan Undang-Undang Dasar 1945. Adapun penerapan politik luar negeri Indonesia yang berpegangan pada pembukaan Undang-Undang Dasar 1945 adalah ......",
        ],
        [
          new AnswerChoiceModel("A", "Indonesia berusaha membantu perjuangan kemerdekaan bangsa-bangsa yang masih terjajah  "),
          new AnswerChoiceModel(
            "B",
            "Menjalin hubungan persahabatan dengan bangsa lain atas dasar saling menghargai dengan tidak ikut campur urusan dalam negeri  "
          ),
          new AnswerChoiceModel("C", "Indonesia membantu pelaksanaan keadilan sosial internasional yang berpedoman pada piagam PBB"),
          new AnswerChoiceModel("D", "Memperkuat sendi-sendi hukum internasional dan organisasi internasional untuk perdamaian yang kekal"),
          new AnswerChoiceModel("E", "Ikut serta melaksanakan ketertiban dunia yang berdasarkan kemerdekaan dan perdamaian yang kekal"),
        ]
      ),
      new QuestionModel(
        "20",
        "twk",
        [
          "Anda dapat mengukur kemampuan berbicara formal Anda menggunakan bermacam-macam tahapan, salah satunya adalah melalui tahap persiapan. Tahap persiapan meliputi hal berikut, kecuali ...",
        ],
        [
          new AnswerChoiceModel("A", "Penentuan topik  "),
          new AnswerChoiceModel("B", "Penentuan tujuan  "),
          new AnswerChoiceModel("C", "Pengumpulan referensi  "),
          new AnswerChoiceModel("D", "Penyusunan kerangka "),
          new AnswerChoiceModel("E", "Pengkajian pokok "),
        ]
      ),
      new QuestionModel(
        "21",
        "twk",
        [
          "Mengakui kesetaraan derajat, kesetaraan hak dan kewajiban asasi setiap manusia, tanpa memandang suku, keturunan, agama, kepercayaan, jenis kelamin, kedudukan sosial, warna kulit dan lainnya adalah pengamalan sila ke ...",
        ],
        [
          new AnswerChoiceModel("A", "1"),
          new AnswerChoiceModel("B", "2"),
          new AnswerChoiceModel("C", "3"),
          new AnswerChoiceModel("D", "4"),
          new AnswerChoiceModel("E", "5"),
        ]
      ),
      new QuestionModel(
        "22",
        "twk",
        [
          "BPUPKI mengadakan sidang pertamanya di gedung Chuo Sangi In di Jalan Pejambon 6 Jakarta yang kini dikenal dengan sebutan Gedung Pancasila. Pada zaman Belanda, gedung tersebut merupakan gedung Volksraad, yang artinya ...",
        ],
        [
          new AnswerChoiceModel("A", "Gedung Pancasila  "),
          new AnswerChoiceModel("B", "Gedung Kemerdekaan  "),
          new AnswerChoiceModel("C", "Gedung Rapat  "),
          new AnswerChoiceModel("D", "Gedung Perwakilan Rakyat "),
          new AnswerChoiceModel("E", "Gedung Pemerintahan "),
        ]
      ),
      new QuestionModel(
        "23",
        "twk",
        [
          "Perhatikan rumusan dasar negara berikut:",
          "1) Peri Ketuhanan",
          "2) Peri Kerakyatan",
          "3) Kesejahteraan Rakyat",
          "4) Musyawarah",
          "5) Keadilan Rakyat",
          "6) Internasionalisme",
          "Rumusan dasar negara yang merupakan usulan yang dikemukakan oleh Prof. Dr. Soepomo ditunjukkan pada nomor?",
        ],
        [
          new AnswerChoiceModel("A", "1) dan 2)  "),
          new AnswerChoiceModel("B", "4) dan 5)  "),
          new AnswerChoiceModel("C", "2) dan 3)  "),
          new AnswerChoiceModel("D", "3) dan 4) "),
          new AnswerChoiceModel("E", "1) dan 6) "),
        ]
      ),
      new QuestionModel(
        "24",
        "twk",
        ["Untuk mengatasi, menanggulangi, dan memberantas korupsi di Indonesia, pemerintah membentuk Komisi Pemberantasan Korupsi pada tahun ..."],
        [
          new AnswerChoiceModel("A", "2001"),
          new AnswerChoiceModel("B", "2002"),
          new AnswerChoiceModel("C", "2003"),
          new AnswerChoiceModel("D", "2004"),
          new AnswerChoiceModel("E", "2005"),
        ]
      ),
      new QuestionModel(
        "25",
        "twk",
        ["Hukum yang lebih tinggi derajatnya mengesampingkan hukum / peraturan yang derajatnya di bawahnya. Pernyataan tersebut merupakan asas ..."],
        [
          new AnswerChoiceModel("A", "Legalitas"),
          new AnswerChoiceModel("B", "Lex superior derogat legi inferior  "),
          new AnswerChoiceModel("C", "Azas non retroaktif  "),
          new AnswerChoiceModel("D", "Lex spesialis derogat lex generalis "),
          new AnswerChoiceModel("E", "Lex posteriori derogat legi priori "),
        ]
      ),
      new QuestionModel(
        "26",
        "twk",
        ["Sila kelima Pancasila, Keadilan sosial bagi seluruh rakyat Indonesia, dilambangkan dengan ..."],
        [
          new AnswerChoiceModel("A", "Padi berwarna hijau dan kapas berwarna merah - putih  "),
          new AnswerChoiceModel("B", "Padi berwarna kuning emas dan kapas berwarna hijau - putih  "),
          new AnswerChoiceModel("C", "Padi berwarna kuning emas dan kapas berwarna merah - putih  "),
          new AnswerChoiceModel("D", "Padi berwarna kuning emas dan kapas berwarna hitam - putih "),
          new AnswerChoiceModel("E", "Padi berwarna merah dan kapas berwarna tua - hijau muda"),
        ]
      ),
      new QuestionModel(
        "27",
        "twk",
        [
          "Pembahasan karya tulis ini penulis awali dengan mengetengahkan masalah yang berkaitan dengan peranan pelajar dalam menciptakan kamtibmas. Secara umum, pelajar merupakan bagian dari masyarakat. Oleh karena itu, pelajar tidak mungkin terlepas dari tanggung jawab dalam kamtibmas, baik secara langsung maupun tidak langsung. Mengingat luasnya jangkauan pembahasan maka pembahasan tersebut akan dibatasi ruang lingkupnya. ",
          "Pertanyaan yang sesuai dengan pendahuluan di atas adalah .... ",
        ],
        [
          new AnswerChoiceModel("A", "Apakah remaja mempunyai sikap acuh tak acuh terhadap kamtibmas?   "),
          new AnswerChoiceModel("B", "Benarkah remaja merupakan bagian dari masyarakat?   "),
          new AnswerChoiceModel("C", "Kapankah remaja harus berperan langsung dalam menciptakan kamtibmas?   "),
          new AnswerChoiceModel("D", "Umur berapakah seseorang dikelompokkan sebagai remaja?  "),
          new AnswerChoiceModel("E", "Bagaimanakah hubungan antara remaja dan orangtua dalam menciptakan kamtibmas? "),
        ]
      ),
      new QuestionModel(
        "28",
        "twk",
        [
          "Orang-orang muda berkecenderungan untuk tidak mau terikat pada apa yang disebut oleh Francis Bacon idola tribus, berhala masyarakat lingkungan. Ikatan, cara berpikir, adat, cara hidup yang biasanya demikian kuat mengikat kebebasan suatu masyarakat, bagi orang muda dipandang sebagai sesuatu yang mengikat kebebasan (dinamisitas, kreativitas) mereka. Kecenderungan inilah yang membuat orang-orang muda lebih dapat berperan dalam dinamika perubahan rasial.",
          "Kata serapan yang tidak terdapat dalam bagian laporan seminar di atas adalah .... ",
        ],
        [
          new AnswerChoiceModel("A", `aktivitas   `),
          new AnswerChoiceModel("B", "rasial   "),
          new AnswerChoiceModel("C", "dinamika   "),
          new AnswerChoiceModel("D", "kreativitas"),
          new AnswerChoiceModel("E", "dinamisitas"),
        ]
      ),
      new QuestionModel(
        "29",
        "twk",
        [
          "Bendungan di Desa Jatirogo ini tidak ada duanya di Indonesia. Tubuh bendungan tersebut dari bantalan karet berisi air. Karena terbuat dari karet, tinggi permukaannya bisa diatur secara fleksibel. Bila terjadi banjir, bantalan karet itu dikempiskan. Dan air bah lancar mengalir ke laut. Sebaliknya bila volume air sungai mengecil, tubuh bendungan diisi penuh, sehingga tingginya mencapai 3 m. Sungai terbendung dan airnya dimanfaatkan sebagai air minum dan irigasi. Pada saat yang sama, air pasang dari laut akan terhambat dan tak mencemari sungai yang menjadi sumber utama air tawar masyarakat di sekitar sungai. ",
          "Makna kata fleksibel dalam paragraf di atas adalah .... ",
        ],
        [
          new AnswerChoiceModel("A", "mudah"),
          new AnswerChoiceModel("B", "leluasa   "),
          new AnswerChoiceModel("C", "longgar"),
          new AnswerChoiceModel("D", "cepat"),
          new AnswerChoiceModel("E", "luwes"),
        ]
      ),
      new QuestionModel(
        "30",
        "twk",
        [
          "Pemakaian batubara di negara kita hingga saat ini masih terbatas hanya pada PLTU dan pabrik semen. Teknologi pengolahan dan kualitas batubara yang dimiliki bisa dikatakan masih rendah. Selain itu, dana juga sangat terbatas. Di negara-negara maju batubara sudah bisa diolah menjadi sumber energi. Di samping itu, dengan teknologi tinggi batubara sudah bisa menghasilkan bahan baku industri kimia berupa gas sintesa. ",
          "Berikut ini yang bukan merupakan rincian isi dari gagasan yang dikemukakan pada wacana di atas adalah .... ",
        ],
        [
          new AnswerChoiceModel("A", "Teknologi pengolahan masih rendah.   "),
          new AnswerChoiceModel("B", "Kualitas batubara masih rendah.   "),
          new AnswerChoiceModel("C", "Batubara menjadi sumber energi.   "),
          new AnswerChoiceModel("D", "Batubara bahan baku industri kimia.  "),
          new AnswerChoiceModel("E", "Pemakaian batubara masih terbatas. "),
        ]
      ),
      new QuestionModel(
        "31",
        "tiu",
        ["UANG : BANK = PADI : ..."],
        [
          new AnswerChoiceModel("A", "Sawah"),
          new AnswerChoiceModel("B", "Lumbung"),
          new AnswerChoiceModel("C", "Jambangan"),
          new AnswerChoiceModel("D", "Kapas"),
          new AnswerChoiceModel("E", "Tempayan"),
        ]
      ),
      new QuestionModel(
        "32",
        "tiu",
        ["DELMAN : KUDA = HELIKOPTER : ..."],
        [
          new AnswerChoiceModel("A", "Tiket"),
          new AnswerChoiceModel("B", "Ban"),
          new AnswerChoiceModel("C", "Baling - baling"),
          new AnswerChoiceModel("D", "Landasan"),
          new AnswerChoiceModel("E", "Penumpang"),
        ]
      ),
      new QuestionModel(
        "33",
        "tiu",
        ["BASKET : RING = ... : ..."],
        [
          new AnswerChoiceModel("A", "Badminton : Kok"),
          new AnswerChoiceModel("B", "Sepak bola : Gawang"),
          new AnswerChoiceModel("C", "Renang : Kolam"),
          new AnswerChoiceModel("D", "Sepak bola : Lapangan"),
          new AnswerChoiceModel("E", "Tinju : Sarung tangan"),
        ]
      ),
      new QuestionModel(
        "34",
        "tiu",
        ["SENIN : RABU = ... : ..."],
        [
          new AnswerChoiceModel("A", "Satu : Tiga"),
          new AnswerChoiceModel("B", "Mawar : Melati"),
          new AnswerChoiceModel("C", "Detik : Menit"),
          new AnswerChoiceModel("D", "Padi : Beras"),
          new AnswerChoiceModel("E", "April : Februari"),
        ]
      ),
      new QuestionModel(
        "35",
        "tiu",
        ["K, M, N, O, Q, Q, ...., ...."],
        [
          new AnswerChoiceModel("A", "R, T"),
          new AnswerChoiceModel("B", "T, S"),
          new AnswerChoiceModel("C", "U, Q"),
          new AnswerChoiceModel("D", "V, J"),
          new AnswerChoiceModel("E", "S, V"),
        ]
      ),
      new QuestionModel(
        "36",
        "tiu",
        ["F, B , F, F, F, J, ...."],
        [
          new AnswerChoiceModel("A", "B"),
          new AnswerChoiceModel("B", "F"),
          new AnswerChoiceModel("C", "K"),
          new AnswerChoiceModel("D", "N"),
          new AnswerChoiceModel("E", "M"),
        ]
      ),
      new QuestionModel(
        "37",
        "tiu",
        ["Y, H, U, J, Q, L, ..."],
        [
          new AnswerChoiceModel("A", "M"),
          new AnswerChoiceModel("B", "N"),
          new AnswerChoiceModel("C", "O"),
          new AnswerChoiceModel("D", "P"),
          new AnswerChoiceModel("E", "Q"),
        ]
      ),
      new QuestionModel(
        "38",
        "tiu",
        ["D, F, E, G, F, H, ...."],
        [
          new AnswerChoiceModel("A", "G, I"),
          new AnswerChoiceModel("B", "H, J"),
          new AnswerChoiceModel("C", "J, L"),
          new AnswerChoiceModel("D", "K, L"),
          new AnswerChoiceModel("E", "L, M"),
        ]
      ),
      new QuestionModel(
        "39",
        "tiu",
        ["W, R, T, P, Q, N, ...."],
        [
          new AnswerChoiceModel("A", "P, O"),
          new AnswerChoiceModel("B", "Q, P"),
          new AnswerChoiceModel("C", "L, N"),
          new AnswerChoiceModel("D", "N, L"),
          new AnswerChoiceModel("E", "M, O"),
        ]
      ),
      new QuestionModel(
        "40",
        "tiu",
        ["A, B, C, F, E, D, G, H, ..."],
        [
          new AnswerChoiceModel("A", "K, J"),
          new AnswerChoiceModel("B", "I, J"),
          new AnswerChoiceModel("C", "I, L"),
          new AnswerChoiceModel("D", "I, N"),
          new AnswerChoiceModel("E", "K, N"),
        ]
      ),
      new QuestionModel(
        "41",
        "tiu",
        [
          "Sebuah mobil menempuh perjalanan 15 km dengan 1 liter bensin ketika mobil dipacu dengan kecepatan 50 km per jam. Jika mobil tersebut berkecepatan 60 km per jam, maka jarak yang dapat ditempuh hanya 80%-nya. Berapakah bensin yang diperlukan untuk menempuh jarak 120 km dengan kecepatan 60 km per jam?",
        ],
        [
          new AnswerChoiceModel("A", "6,4 liter"),
          new AnswerChoiceModel("B", "8 liter"),
          new AnswerChoiceModel("C", "9,6 liter"),
          new AnswerChoiceModel("D", "10 liter"),
          new AnswerChoiceModel("E", "7,6 liter"),
        ]
      ),
      new QuestionModel(
        "42",
        "tiu",
        ["Seperti ayam bertelur di atas padi.", " Makna peribahasa di atas adalah ..."],
        [
          new AnswerChoiceModel("A", "Bagai orang kaya yang tak pernah habis hartanya"),
          new AnswerChoiceModel("B", "Orang yang senang hidupnya karena tinggal pada orang kaya yang pemurah"),
          new AnswerChoiceModel("C", "Kelimpahan harta kekayaan yang tak disangka - sangka"),
          new AnswerChoiceModel("D", "Selalu menonjolkan kekayaan "),
          new AnswerChoiceModel("E", "Orang yang kaya sehingga segalanya diukur dengan harta benda"),
        ]
      ),
      new QuestionModel(
        "43",
        "tiu",
        [
          "Murid sebuah TK adalah sejumlah A anak. Dari jumlah tersebut, sejumlah B anak suka melukis, sejumlah C anak suka menari, dan sejumlah D anak suka melukis dan menari. Berapa porsi jumlah anak yang tidak menyukai melukis atau menari?",
        ],
        [
          new AnswerChoiceModel("A", "( A - B - C ) : A "),
          new AnswerChoiceModel("B", "( D + C + B ) : A"),
          new AnswerChoiceModel("C", "( A - D - C - B ) : A"),
          new AnswerChoiceModel("D", "( A + D - C - B ) : A "),
          new AnswerChoiceModel("E", "( A - C + B + D ) : A "),
        ]
      ),
      new QuestionModel(
        "44",
        "tiu",
        ["Wilson menempuh perjalanan 70 km dalam 2 1/2 jam. Agar bisa sampai di tujuan 1/2 jam lebih cepat, berapa seharusnya kecepatan Wilson?"],
        [
          new AnswerChoiceModel("A", "12 km/jam"),
          new AnswerChoiceModel("B", "35 km/jam"),
          new AnswerChoiceModel("C", "27 km/jam"),
          new AnswerChoiceModel("D", "28 km/jam"),
          new AnswerChoiceModel("E", "29 km/jam"),
        ]
      ),
      new QuestionModel(
        "45",
        "tiu",
        [
          "Nilai rata - rata ulangan matematika dari 30 siswa adalah 45. Jika nilai dari Jose digabungkan dengan kelompok itu, maka nilai rata - rata ulangan matematika menjadi 46. Berapakah nilai Jose?",
        ],
        [
          new AnswerChoiceModel("A", "50"),
          new AnswerChoiceModel("B", "66"),
          new AnswerChoiceModel("C", "76"),
          new AnswerChoiceModel("D", "80"),
          new AnswerChoiceModel("E", "85"),
        ]
      ),
      new QuestionModel(
        "46",
        "tiu",
        [
          "Keluarga Pak Anwar akan berfoto bersama di sebuah studio foto. Pak Anwar mempunyai 2 orang anak. Mereka semua akan berfoto secara berdampingan. Peluang foto pak Anwar dan istri berdampingan adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "1/3"),
          new AnswerChoiceModel("B", "1/4"),
          new AnswerChoiceModel("C", "2/3"),
          new AnswerChoiceModel("D", "1/2"),
          new AnswerChoiceModel("E", "1/5"),
        ]
      ),
      new QuestionModel(
        "47",
        "tiu",
        ["Harga laptop dinaikkan dua puluh lima persen dari harga sebelumnya. Persentase penurunan harga agar laptop kembali seperti harga semula adalah ..."],
        [
          new AnswerChoiceModel("A", "0.2"),
          new AnswerChoiceModel("B", "0.25"),
          new AnswerChoiceModel("C", "0.49"),
          new AnswerChoiceModel("D", "0.5"),
          new AnswerChoiceModel("E", "0.55"),
        ]
      ),
      new QuestionModel(
        "48",
        "tiu",
        [
          "Kenny, pemain bulutangkis Klub Jaya, dapat melakukan service forehand dengan baik.",
          "Setiap pemain yang bisa melakukan service forehand dengan baik dapat melakukan dropshot akurat.",
          "Kesimpulan yang benar adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Beberapa pemain bulutangkis Klub Jaya dapat melakukan dropshot dengan baik."),
          new AnswerChoiceModel("B", "Semua pemain bulutangkis Klub Jaya dapat melakukan service forehand dengan baik dan dropshot yang akurat."),
          new AnswerChoiceModel("C", "Beberapa pemain bulutangkis Klub Jaya dapat melakukan service forehand dengan baik dan dropshot yang akurat."),
          new AnswerChoiceModel(
            "D",
            "Beberapa pemain bulutangkis Klub Jaya tidak dapat melakukan service forehand dengan baik tetapi dapat melakukan dropshot yang akurat."
          ),
          new AnswerChoiceModel("E", "Semua pemain bulutangkis dapat melakukan service forehand dengan baik dan dropshot yang akurat."),
        ]
      ),
      new QuestionModel(
        "49",
        "tiu",
        [
          "Sebuah bus tampak dipenuhi penumpang hingga 10 orang penumpang terpaksa harus berdiri. Pada halte berikutnya 17 penumpang turun dan naik 8 orang. 5 penumpang kemudian turun di pemberhentian berikutnya tanpa ada seorangpun yang naik. Di halte berikutnya 4 orang naik tanpa seorangpun penumpang di dalam bus yang turun.",
          "Berapa kursi kosong di dalam bus setelah bus meninggalkan halte tersebut?",
        ],
        [
          new AnswerChoiceModel("A", "Tidak ada kursi kosong"),
          new AnswerChoiceModel("B", "1 kursi kosong"),
          new AnswerChoiceModel("C", "2 kursi kosong"),
          new AnswerChoiceModel("D", "3 kursi kosong"),
          new AnswerChoiceModel("E", "4 kursi kosong"),
        ]
      ),
      new QuestionModel(
        "50",
        "tiu",
        ["Della membeli gaun pesta seharga Rp 156.000. Ia mendapat diskon sebesar 5%. Berapa rupiah yang harus dibayar Della?"],
        [
          new AnswerChoiceModel("A", "Rp150.000"),
          new AnswerChoiceModel("B", "Rp146.700"),
          new AnswerChoiceModel("C", "Rp148.200"),
          new AnswerChoiceModel("D", "Rp148.400"),
          new AnswerChoiceModel("E", "Rp148.600"),
        ]
      ),
      new QuestionModel(
        "51",
        "tiu",
        ["Semua tenda beratap dan tinggi.", " Andi berada di tempat yang tidak beratap dan tidak tinggi.", "Kesimpulan yang tepat adalah ..."],
        [
          new AnswerChoiceModel("A", "Andi berada di tenda beratap."),
          new AnswerChoiceModel("B", "Andi berada di tenda tinggi."),
          new AnswerChoiceModel("C", "Andi berada di bukan tenda."),
          new AnswerChoiceModel("D", "Andi berada di tenda bukan beratap."),
          new AnswerChoiceModel("E", "Andi berada di tenda bukan beratap dan bukan tinggi."),
        ]
      ),
      new QuestionModel(
        "52",
        "tiu",
        [
          "Sebuah survei yang dilakukan pada 50 orang di sebuah toko kaset menghasilkan:",
          "25 orang suka musik pop",
          "27 orang suka musik rock",
          "4 orang tidak suka musik pop atau rock",
          "Berapa orang yang hanya suka satu jenis musik?",
        ],
        [
          new AnswerChoiceModel("A", "6"),
          new AnswerChoiceModel("B", "52"),
          new AnswerChoiceModel("C", "40"),
          new AnswerChoiceModel("D", "46"),
          new AnswerChoiceModel("E", "12"),
        ]
      ),
      new QuestionModel(
        "53",
        "tiu",
        [
          "Berapa lama waktu yang diperlukan untuk mengisi penuh air ke dalam sebuah tangki berkapasitas 3.750 sentimeter kubik jika air tersebut dipompakan ke dalam tangki dengan kecepatan 300 sentimeter kubik per menit?",
        ],
        [
          new AnswerChoiceModel("A", "12 menit 30 detik"),
          new AnswerChoiceModel("B", "12 menit"),
          new AnswerChoiceModel("C", "10 menit 30 detik"),
          new AnswerChoiceModel("D", "11 menit"),
          new AnswerChoiceModel("E", "11 menit 25 detik"),
        ]
      ),
      new QuestionModel(
        "54",
        "tiu",
        [
          "Enam orang mahasiswa masing - masing memiliki sejumlah uang. Jika uang yang dimiliki oleh setiap dua orang dari mereka dijumlahkan, besarnya adalah (dalam ribuan) 215, 197, 264, 236, 208, 229, 252, 244, 218, 241, 226, 249, 258, 256, 247. Jumlah uang keenam mahasiswa tersebut adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "590"),
          new AnswerChoiceModel("B", "688"),
          new AnswerChoiceModel("C", "708"),
          new AnswerChoiceModel("D", "780"),
          new AnswerChoiceModel("E", "760"),
        ]
      ),
      new QuestionModel(
        "55",
        "tiu",
        [
          "A, B, dan C mengumpulkan uang untuk membuka usaha, berturut - turut Rp 140.000, Rp 180.000, dan Rp 220.000. Pembagian keuntungan sebanding dengan jumlah modal yang disetorkan. Jika usaha mereka mendapat untung sebanyak Rp 150.000 berapa keuntungan yang diterima B?",
        ],
        [
          new AnswerChoiceModel("A", "Rp50.000"),
          new AnswerChoiceModel("B", "Rp75.000"),
          new AnswerChoiceModel("C", "Rp70.000"),
          new AnswerChoiceModel("D", "Rp62.000"),
          new AnswerChoiceModel("E", "Rp65.000"),
        ]
      ),
      new QuestionModel(
        "56",
        "tiu",
        ["Nan lurah jua dituruti air.", "Makna peribahasa di atas adalah ..."],
        [
          new AnswerChoiceModel("A", "Orang angkuh selalu tidak peduli kata orang lain "),
          new AnswerChoiceModel("B", "Orang kaya juga yang senantiasa bertambah kekayaanya, orang miskin tetap miskin"),
          new AnswerChoiceModel("C", "Kehidupan sebaiknya seperti air mengalir"),
          new AnswerChoiceModel("D", "Keadaan yang sangat sulit"),
          new AnswerChoiceModel("E", "Kondisi yang biasa - biasa saja"),
        ]
      ),
      new QuestionModel(
        "57",
        "tiu",
        [
          "Ada suatu apartemen yang terdiri dari beberapa lantai yang jaraknya sama. Apartemen tersebut diurutkan sesuai dengan syarat di bawah ini :",
          "- Lantai U terletak persis di atas lantai X",
          "- Lantai W terletak persis di atas lantai Y",
          "- Lantai Z terletak empat lantai di bawah X",
          "- Lantai W terletak dua lantai di atas lantai Z",
          "- S dan V terpisah dua lantai",
          "Urutan lantai dari bawah ke atas adalah....",
        ],
        [
          new AnswerChoiceModel("A", "U W Y Z X"),
          new AnswerChoiceModel("B", "Z Y W X U"),
          new AnswerChoiceModel("C", "U X Z W Y"),
          new AnswerChoiceModel("D", "W Y Z U X"),
          new AnswerChoiceModel("E", "Tidak ada kesimpulan yang benar"),
        ]
      ),
      new QuestionModel(
        "58",
        "tiu",
        [
          "Ada suatu apartemen yang terdiri dari beberapa lantai yang jaraknya sama. Apartemen tersebut diurutkan sesuai dengan syarat di bawah ini :",
          "- Lantai U terletak persis di atas lantai X",
          "- Lantai W terletak persis di atas lantai Y",
          "- Lantai Z terletak empat lantai di bawah X",
          "- Lantai W terletak dua lantai di atas lantai Z",
          "- S dan V terpisah dua lantai",
          "Posisi S maupun V tidak berimpit dengan U, W, X, Y maupun Z. Mana yang tidak mungkin benar?",
        ],
        [
          new AnswerChoiceModel("A", "V terletak satu lantai di bawah U"),
          new AnswerChoiceModel("B", "S terletak satu lantai di atas U"),
          new AnswerChoiceModel("C", "S terletak empat lantai di bawah U"),
          new AnswerChoiceModel("D", "V terletak di bawah S tetapi di atas Z"),
          new AnswerChoiceModel("E", "Tidak ada kesimpulan yang benar"),
        ]
      ),
      new QuestionModel(
        "59",
        "tiu",
        [
          "Karena adanya pandemi covid 19, sebuah hotel di tempat wisata untuk hari tertentu mengurangi jumlah pengunjung sebesar 25% menjadi 150 tamu sehari. Maka jumlah pengunjung setiap harinya sebelum adanya pengurangan adalah....",
        ],
        [
          new AnswerChoiceModel("A", "320"),
          new AnswerChoiceModel("B", "510"),
          new AnswerChoiceModel("C", "80"),
          new AnswerChoiceModel("D", "200"),
          new AnswerChoiceModel("E", "195"),
        ]
      ),
      new QuestionModel(
        "60",
        "tiu",
        [
          "Seorang dosen akan melakukan pembimbingan skripsi dengan mahasiswanya. Adapun urutannya adalah P akan bimbingan setelah S. Q  bimbingan sebelum R dan bersamaan dengan P. Maka urutan bimbingan yang benar adalah....",
        ],
        [
          new AnswerChoiceModel("A", "Setelah R adalah P, Q, S"),
          new AnswerChoiceModel("B", "Sebelum Q adalah R"),
          new AnswerChoiceModel("C", "Sebelum S adalah Q"),
          new AnswerChoiceModel("D", "Setelah P adalah Q, S"),
          new AnswerChoiceModel("E", "Setelah S adalah P, Q, R"),
        ]
      ),
      new QuestionModel(
        "61",
        "tiu",
        [
          "Suatu kegiatan organisasi akan dibentuk dengan pembagian tim yang terdiri dari masing-masing tiga orang. Reza harus berada satu tim dengan Nita. Zea tidak boleh satu tim dengan Yoel atau Wilda. Wilda tidak boleh terpisah dengan Nita. Sedangkan Firman hanya mau satu tim dengan Alisa. Panji akan satu tim dengan Zea dan Cho selalu menerima bergabung dengan tim siapa saja. Maka anggota yang tidak mungkin berada pada satu tim adalah....",
        ],
        [
          new AnswerChoiceModel("A", "Reza dan Nita"),
          new AnswerChoiceModel("B", "Panji dan Cho"),
          new AnswerChoiceModel("C", "Reza dan Zea"),
          new AnswerChoiceModel("D", "Firman dan Alisa"),
          new AnswerChoiceModel("E", "Wilda dan Reza"),
        ]
      ),
      new QuestionModel("62", "tiu", "https://i.ibb.co/v1JvznF/14.png", [
        new AnswerChoiceModel("A", "https://i.ibb.co/BKCmChF/14a.png"),
        new AnswerChoiceModel("B", "https://i.ibb.co/C1Mf5QP/14b.png"),
        new AnswerChoiceModel("C", "https://i.ibb.co/P6p6PTm/14c.png"),
        new AnswerChoiceModel("D", "https://i.ibb.co/QKHb92p/14d.png"),
        new AnswerChoiceModel("E", "-"),
      ]),
      new QuestionModel("63", "tiu", "https://i.ibb.co/R0qdjSr/15.png", [
        new AnswerChoiceModel("A", "https://i.ibb.co/DM0s4Qx/15a.png"),
        new AnswerChoiceModel("B", "https://i.ibb.co/NnwHQQ1/15b.png"),
        new AnswerChoiceModel("C", "https://i.ibb.co/fSMhwxP/15c.png"),
        new AnswerChoiceModel("D", "https://i.ibb.co/wNMrPxY/15d.png"),
        new AnswerChoiceModel("E", "-"),
      ]),
      new QuestionModel("64", "tiu", "https://i.ibb.co/hysZrDY/16.png", [
        new AnswerChoiceModel("A", "https://i.ibb.co/d2D8nBr/16a.png"),
        new AnswerChoiceModel("B", "https://i.ibb.co/KDntcyb/16b.png"),
        new AnswerChoiceModel("C", "https://i.ibb.co/ZdGRVDB/16c.png"),
        new AnswerChoiceModel("D", "https://i.ibb.co/5xS5Bwd/16d.png"),
        new AnswerChoiceModel("E", "-"),
      ]),
      new QuestionModel("65", "tiu", "https://i.ibb.co/PGZkcKP/17.png", [
        new AnswerChoiceModel("A", "https://i.ibb.co/RNdfsFP/17a.png"),
        new AnswerChoiceModel("B", "https://i.ibb.co/BPLCm1Y/17b.png"),
        new AnswerChoiceModel("C", "https://i.ibb.co/w0RM7xz/17c.png"),
        new AnswerChoiceModel("D", "https://i.ibb.co/Jn8s9Dc/17d.png"),
        new AnswerChoiceModel("E", "-"),
      ]),
      new QuestionModel(
        "66",
        "tkp",
        ["Kakak Anda dimarahi orang tua karena uang SPP hilang. Maka yang anda lakukan adalah ..."],
        [
          new AnswerChoiceModel("A", "Membiarkannya untuk mengingat dimana uang tersebut"),
          new AnswerChoiceModel("B", "Menenangkannya karena dimarahai oleh orang tua "),
          new AnswerChoiceModel("C", "Membantu mencari uang yang hilang"),
          new AnswerChoiceModel("D", "Ikut menyalahkannya"),
          new AnswerChoiceModel("E", "Pura - pura tidak tahu"),
        ]
      ),
      new QuestionModel(
        "67",
        "tkp",
        ["Atasan anda melakukan rekayasa laporan keuangan kantor, maka anda ..."],
        [
          new AnswerChoiceModel("A", "Dalam hati tidak menyetujui hal tersebut"),
          new AnswerChoiceModel("B", "Hal tersebut sering terjadi di kantor manapun"),
          new AnswerChoiceModel("C", "Mengingatkan dan melaporkan kepada yang berwenang"),
          new AnswerChoiceModel("D", "Tidak ingin terlibat dalam proses rekayasa tersebut"),
          new AnswerChoiceModel("E", "Hal semacam itu memang sudah menjadi tradisi yang tidak baik di Indonesia"),
        ]
      ),
      new QuestionModel(
        "68",
        "tkp",
        [
          "Saya dipercayakan mengatur suatu kegiatan yang belum dipublikasikan dan masih harus dijaga kerahasiaannya. Ketika saya berada di antara teman-teman dekat di kantor, saya .... ",
        ],
        [
          new AnswerChoiceModel("A", "Akan mengalihkan ke pembicaraan lain bila mereka sudah mulai menyinggung mengenai tugas baru saya."),
          new AnswerChoiceModel("B", "Akan merasa gelisah dan kurang senang bila mereka mulai membicarakan tugas baru saya"),
          new AnswerChoiceModel("C", "Membatasi pembicaraan agar tidak menyangkut ke hal-hal tugas baru saya"),
          new AnswerChoiceModel("D", "Membicarakan hal-hal lain yang tidak ada kaitannya dengan tugas baru saya"),
          new AnswerChoiceModel("E", "Suka menerima masukan demi masukan dalam rangka pengembangan tugas baru saya dan tetap menjaga amanah"),
        ]
      ),
      new QuestionModel(
        "69",
        "tkp",
        [
          "Hampir semua rekan kerja di departemen kamu berkeliaran selama jam kerja dan dengan sadar memperlambat waktu istirahat. Sedangkan kamu yang masih menjadi pegawai baru, mendapat banyak sekali tugas yang tidak sebanding dengan rekan-rekan senior kamu. Menyikapi hal ini, yang kamu lakukan adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Mencoba memperbincangkan hal ini kepada atasan"),
          new AnswerChoiceModel("B", "Melaporkan hal ini kepada unit kepatuhan internal di bagian saya"),
          new AnswerChoiceModel("C", "Tetap melaksanakan pekerjaan"),
          new AnswerChoiceModel("D", "Mengusahakan untuk tetap memberikan yang terbaik akan tugas dan mengerjakannya dengan sepenuh hati"),
          new AnswerChoiceModel(
            "E",
            "Tidak perduli akan hal itu karena saya memegang kedisipinan dan sikap mawas diri dengan mengerjakan apa yang menjadi bagian saya dan tidak memperdulikan apa yang bukan menjadi wewenang saya"
          ),
        ]
      ),
      new QuestionModel(
        "70",
        "tkp",
        [
          "Anda adalah bagian dari suatu unit pada organisasi tertentu. Suatu saat Ada penyelewengan yang terjadi dalam unit Anda berupa pemalsuan data yang dilakukan oleh rekan unit Anda. Sikap Anda adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Marah"),
          new AnswerChoiceModel("B", "Menyampaikan dalam rapat unit tentang penyelewengan tersebut"),
          new AnswerChoiceModel("C", "Pura - pura tidak tahu"),
          new AnswerChoiceModel("D", "Menyampaikan bahwa apa yang dilakukan adalah kesalahan dan mencoba memperbaikinya"),
          new AnswerChoiceModel("E", "Merasa malu, karena itu bagian dari kerja unit Anda"),
        ]
      ),
      new QuestionModel(
        "71",
        "tkp",
        [
          "Suatu waktu anda diminta oleh kepala divisi secara mendadak untuk melaporkan hasil perkembangan pekerjaan yang dibebankan kepada anda, maka anda akan ...",
        ],
        [
          new AnswerChoiceModel("A", "Panik"),
          new AnswerChoiceModel("B", "Mencari alasan"),
          new AnswerChoiceModel("C", "Semakin termotifasi"),
          new AnswerChoiceModel("D", "Biasa saja"),
          new AnswerChoiceModel("E", "Melaporkan perkembangan seadanya"),
        ]
      ),
      new QuestionModel(
        "72",
        "tkp",
        ["Salah seorang klien anda merupakan orang yang suka terlambat. Maka anda ..."],
        [
          new AnswerChoiceModel("A", "Tidak akan mencontohnya"),
          new AnswerChoiceModel("B", "Tidak suka dengan sikapnya"),
          new AnswerChoiceModel("C", "Memberikan nasihat kepadanya"),
          new AnswerChoiceModel("D", "Mengingatkan dia agar tidak terlambat lagi"),
          new AnswerChoiceModel("E", "Melaporkannya kepada atasan anda"),
        ]
      ),
      new QuestionModel(
        "73",
        "tkp",
        [
          "Hampir semua pegawai di kantor instansi saya meminta uang tanda terima kasih atas pengurusan surat izin tertentu. Namun menurut peraturan kantor, hal itu tidaklah diperbolehkan, maka saya ...",
        ],
        [
          new AnswerChoiceModel("A", "Ikut melakukannya karena bagaimana pun juga kawan - kawan kantor juga melakukannya"),
          new AnswerChoiceModel("B", "Melakukannya hanya jika terpaksa membutuhkan uang tambahan untuk keperluan keluarga, sebab gaji kantor memang kecil"),
          new AnswerChoiceModel("C", "Terkadang saja melakukan hal tersebut"),
          new AnswerChoiceModel("D", "Berusaha semampunya untuk tidak melakukannya"),
          new AnswerChoiceModel("E", "Tidak ingin melakukannya sama sekali"),
        ]
      ),
      new QuestionModel(
        "74",
        "tkp",
        ["Tim bola voli unit kami diperkirakan akan kalah melawan tim bola voli unit lain dalam instansi kami. Sikap saya dalam pertandingan adalah ..."],
        [
          new AnswerChoiceModel("A", "Lebih baik diam karena sadar akan kekuatan tim kami"),
          new AnswerChoiceModel("B", "Berusaha bersembunyi agar tidak diketahui bahwa saya adalah pendukung tim lemah"),
          new AnswerChoiceModel("C", "Tetap memberikan dukungan dengan penuh semangat"),
          new AnswerChoiceModel("D", "Jika tim kami kalah tidaklah mengapa, toh sudah diperkirakan demikian"),
          new AnswerChoiceModel("E", "Memberikan dukungan karena malu dianggap tidak setia kawan"),
        ]
      ),
      new QuestionModel(
        "75",
        "tkp",
        ["Keadaan yang sering terjadi saat ada masalah dalam sebuah tim kerja yang baru adalah ..."],
        [
          new AnswerChoiceModel("A", "Semua teman saya terlibat aktif untuk menyelesaikannya"),
          new AnswerChoiceModel("B", "Tidak semua orang mau mengerjakan pekerjaan yang terkait dengan masalah tersebut"),
          new AnswerChoiceModel("C", "Akhirnya saya juga yang harus membereskannya"),
          new AnswerChoiceModel("D", "Saling mengharapkan ada yang menyelesaikan pekerjaan tersebut"),
          new AnswerChoiceModel("E", "Pekerjaan akan selesai hanya jika ada yang memulai bekerja"),
        ]
      ),
      new QuestionModel(
        "76",
        "tkp",
        ["Saya mendapat kesempatan menjadi pengawal pribadi pejabat negara dalam pertemuan penting dengan para investor asing. Sikap saya ..."],
        [
          new AnswerChoiceModel("A", "Berusaha menghindari media masa yang membujuk untuk mengetahui hasil pertemuan tersebut"),
          new AnswerChoiceModel("B", "Dengan bangga saya akan menceritakan kepada rekan media tentang pertemuan tersebut"),
          new AnswerChoiceModel("C", "Memberitahu keluarga tentang hasil pertemuan"),
          new AnswerChoiceModel("D", "Memberitahu sahabat saya di kantor tentang hasil pertemuan"),
          new AnswerChoiceModel("E", "Tidak akan membocorkan hasil pertemuan karena bukan wewenang saya"),
        ]
      ),
      new QuestionModel(
        "77",
        "tkp",
        ["Terjadi pergantian pimpinan di unit kerja saya. Sikap saya adalah ..."],
        [
          new AnswerChoiceModel("A", "Tidak peduli"),
          new AnswerChoiceModel("B", "Berusaha mengenal dan memahami visi dan misi pimpinan baru"),
          new AnswerChoiceModel("C", "Tidak berusaha mendekati pimpinan baru karena takut dicap penjilat"),
          new AnswerChoiceModel("D", "Berusaha mengenal pribadi pimpinan baru"),
          new AnswerChoiceModel("E", "Pergantian pimpinan itu sesuatu yang biasa"),
        ]
      ),
      new QuestionModel(
        "78",
        "tkp",
        ["Saya sudah berusaha untuk memperbaiki kelemahan diri, tetapi belum juga menampakkan hasilnya. Sehingga saya ..."],
        [
          new AnswerChoiceModel("A", "menerimanya dengan terpaksa"),
          new AnswerChoiceModel("B", "menerimanya, meski tentu saja dengan sedikit kekecewaan"),
          new AnswerChoiceModel("C", "menerimanya dengan lapang dada"),
          new AnswerChoiceModel("D", "membenci diri saya sendiri"),
          new AnswerChoiceModel("E", "meratapi diri sendiri"),
        ]
      ),
      new QuestionModel(
        "79",
        "tkp",
        [
          "Seorang kawan memiliki isteri yang akan melahirkan, dan karena tidak memiliki biaya Rumah Sakit, maka dia meminjam uang dari anda, padahal uang anda hanya cukup untuk kebutuhan sehari - hari.",
        ],
        [
          new AnswerChoiceModel("A", "Saya meminta maaf dan mengatakan yang sebenarnya bahwa saya tidak punya uang untuk dipinjamkan"),
          new AnswerChoiceModel("B", "Saya pinjamkan sisa uang saya yang sedikit tersebut"),
          new AnswerChoiceModel("C", "Saya menolak meminjamkan uang saya, karena itu hanya cukup untuk kebutuhan sehari - hari"),
          new AnswerChoiceModel("D", "Saya akan memberikan solusi dengan membantunya meminjam uang dari kawan lain"),
          new AnswerChoiceModel("E", "Saya menyarankan agar dia meminjam dari orang lain"),
        ]
      ),
      new QuestionModel(
        "80",
        "tkp",
        ["Anda berada dalam satu kelompok untuk mengerjakan tugas dari Kampus dan teman - teman Anda merupakan orang - orang yang sibuk, maka anda akan ..."],
        [
          new AnswerChoiceModel("A", "Mencoba mengetahui jadwal masing - masing sehingga mereka semua dapat meluangkan waktunya untuk kerja kelompok"),
          new AnswerChoiceModel("B", "Mulai mengajak mereka kerja kelompok ketika mereka tidak sibuk lagi"),
          new AnswerChoiceModel("C", "Mulai mengajak mereka kerja kelompok ketika tenggak waktu penyelesaian sudah hampir tiba"),
          new AnswerChoiceModel("D", "Cuek saja yang penting saya menyelesaikan apa yang menjadi tugas saya"),
          new AnswerChoiceModel("E", "Menasehati rekan - rekan yang menurut Anda sangat sibuk sehingga tidak memiliki waktu untuk mengerjakan pekerjaan tim"),
        ]
      ),
      new QuestionModel(
        "81",
        "tkp",
        ["Apa yang anda lakukan bila terjadi kebakaran dikantor anda ..."],
        [
          new AnswerChoiceModel("A", "Segera memanggil pemadam kebakaran"),
          new AnswerChoiceModel("B", "Melaporkan pada petugas gedung untuk menyelamatkan semua orang"),
          new AnswerChoiceModel("C", "Meminta semua tenang"),
          new AnswerChoiceModel("D", "Menjalankan prosedur penyelamatan diri, sehingga mengajak yang lain untuk keluar melalui pintu darurat"),
          new AnswerChoiceModel("E", "Mematikan aliran listrik dan tidak menggunakan lift untuk meninggalkan gedung"),
        ]
      ),
      new QuestionModel(
        "82",
        "tkp",
        ["Banyak senior di kantor yang datang terlambat saat kerja, saya sebagai junior yang baru masuk ..."],
        [
          new AnswerChoiceModel("A", "Tidak ikut"),
          new AnswerChoiceModel("B", "Memberi contoh dengan datang lebih awal"),
          new AnswerChoiceModel("C", "Tergantung perintah pimpinan"),
          new AnswerChoiceModel("D", "Ikut kebiasaan yang sudah ada"),
          new AnswerChoiceModel("E", "Menegur senior"),
        ]
      ),
      new QuestionModel(
        "83",
        "tkp",
        [
          "Pekerjaan Sita mendapat kritik dari orang lain, yaitu oleh warga yang pernah memiliki urusan administrasi dengannya, padahal banyak sekali warga yang menilai Sita sangat baik dalam melakukan pelayanan. Maka yang Sita lakukan adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Mendiamkannya karena itu urusan dia"),
          new AnswerChoiceModel("B", "Bertanya kepadanya terkait dengan pelayanan saya"),
          new AnswerChoiceModel("C", "Tidak terima dan langsung marah"),
          new AnswerChoiceModel("D", "Menanyakan kepadanya dan menunjukkan SOP "),
          new AnswerChoiceModel("E", "Tidak peduli karena ia kurang memahami sistem"),
        ]
      ),
      new QuestionModel(
        "84",
        "tkp",
        [
          "Ketika anda mengetik tugas dari atasan anda, tanpa sengaja teman anda mencabut kabel sambung dari stop kontak, secara otomatis komputer anda mati. Anda sangat panik karena data yang anda ketik belum tersimpan. Maka sikap yang akan anda tunjukan adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Memarahi rekan yang melakukan hal tersebut"),
          new AnswerChoiceModel("B", "Menerima permintaan maaf teman Anda"),
          new AnswerChoiceModel("C", "Meminta teman anda bertanggung jawab atas perbuatannya"),
          new AnswerChoiceModel("D", "Memaklumi ketidaksengajaan teman anda dan segera meneruskan tugas"),
          new AnswerChoiceModel("E", "Menghela nafas panjang"),
        ]
      ),
      new QuestionModel(
        "85",
        "tkp",
        ["Ditengah pekerjaan besar dengan target yang tinggi saya mengalami kegagalan besar yang sangat mengancam karir saya, sebaiknya saya ..."],
        [
          new AnswerChoiceModel("A", "Meminta maaf atas kegagalan saya"),
          new AnswerChoiceModel("B", "Bertanggung jawab sepenuhnya atas apa yang saya lakukan"),
          new AnswerChoiceModel("C", "Tidak berputus asa, saya jadikan kegagalan ini sebagai penguat langkah kedepan"),
          new AnswerChoiceModel("D", "Bertanggung jawab dengan segera mengundurkan diri dari pekerjaan"),
          new AnswerChoiceModel("E", "Mencari - cari dalang dibalik kegagalan ini"),
        ]
      ),
      new QuestionModel(
        "86",
        "tkp",
        [
          "Mugga merupakan siswa yang sering absen kehadirannya, sehingga prestasi akademiknya sangat rendah. Mugga sering absen karena ia harus mengikuti ritual acara keagamaannya. Nindy sebagai wali kelas Mugga sangat prihatin dengan situasi ini. Yang bisa dilakukan oleh Nindy adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "Meminta Mugga untuk lebih rajin masuk kelas dan mengikuti pelajaran"),
          new AnswerChoiceModel("B", "Mencari informasi dari orang tua Mugga tentang ritual kepercayaan tersebut"),
          new AnswerChoiceModel("C", "Mencari informasi kepada orang lain yang memiliki kepercayaan sama dengan Mugga "),
          new AnswerChoiceModel("D", "Meminta sekolah mendiskusikan dispensasi ketidakhadiran karena ritual kepercayaan"),
          new AnswerChoiceModel("E", "Bertanya kepada Mugga mengenai ritual yang wajib dilaksanakan menurut agama Mugga"),
        ]
      ),
      new QuestionModel(
        "87",
        "tkp",
        [
          "Anda menerima perintah tugas ke luar kota. Kebetulan pekerjaan anda di kantor menumpuk dan harus diselesaikan. Maka tindakan yang akan anda lakukan adalah...",
        ],
        [
          new AnswerChoiceModel("A", "Meminta atasan untuk memberikan perpanjangan waktu menyelesaikan tugas tersebut"),
          new AnswerChoiceModel("B", "Meminta atasan untuk keluar kota setelah anda menyelesaikan pekerjaan anda"),
          new AnswerChoiceModel(
            "C",
            "Mengkoordinasikan tugas yang dapat dipercayakan kepada rekan kerja, selain tidak menyalahi prosedur pekerjaan dapat diselesaikan tepat waktu"
          ),
          new AnswerChoiceModel("D", "Membawa pekerjaan tersebut ke luar kota. Sehingga dapat diselesaikan tepat waktu"),
          new AnswerChoiceModel("E", "Menyelesaikan semampu Anda"),
        ]
      ),
      new QuestionModel(
        "88",
        "tkp",
        ["Dibandingkan dengan rekan - rekan kerja saya yang lain, gaya kemarahan saya adalah ..."],
        [
          new AnswerChoiceModel("A", "Saya sering marah seperti lazimnya rekan lain"),
          new AnswerChoiceModel("B", "Kemarahan saya lebih dahsyat dari rekan lain"),
          new AnswerChoiceModel("C", "Saya tidak pernah marah"),
          new AnswerChoiceModel("D", "Saya marah jika memang diperlukan untuk perbaikan kondisi agar lebih baik"),
          new AnswerChoiceModel("E", "Saya cenderung lebih pemarah dari rekan lain"),
        ]
      ),
      new QuestionModel(
        "89",
        "tkp",
        [
          "Anda adalah seorang artis yang sedang naik daun. Suatu hari manager Anda meminta Anda untuk syuting di luar kota, sedangkan masih banyak sekali beban pekerjaan kantor yang harus anda selesaikan, maka anda akan ...",
        ],
        [
          new AnswerChoiceModel("A", "Keluar dari PNS"),
          new AnswerChoiceModel("B", "Meminta izin atasan agar bisa melimpahkan pekerjaan ke rekan yang lain"),
          new AnswerChoiceModel("C", "Segera menyelesaikan pekerjaan, kalau tidak terkejar, baru meminta izin atasan"),
          new AnswerChoiceModel("D", "Mengundurkan diri dari perfilman"),
          new AnswerChoiceModel("E", "Marah pada keadaan"),
        ]
      ),
      new QuestionModel(
        "90",
        "tkp",
        ["Saya mempunyai seorang saudara yang ingin sekali sekolah ditempat saya mengajar , yang saya lakukan..."],
        [
          new AnswerChoiceModel("A", "Memberinya alamat rumah kepala sekolah saya"),
          new AnswerChoiceModel("B", "Memberitahukan pihak penyeleksi bahwa saudara saya akan mendaftar"),
          new AnswerChoiceModel("C", "Memberikan trik dan celah untuk bisa lulus"),
          new AnswerChoiceModel("D", "Menyemangatinya namun tak membantu apapun"),
          new AnswerChoiceModel("E", "Tidak mempedulikannya"),
        ]
      ),
      new QuestionModel(
        "91",
        "tkp",
        ["Pimpinan ingin dibuatkan sebuah kumpulan berita - berita baru yang mudah dibaca, maka sebaiknya ..."],
        [
          new AnswerChoiceModel("A", "Saya buatkan kliping koran dengan jangka waktu tiap bulan"),
          new AnswerChoiceModel("B", "Saya kumpulkan berita - berita dari internet internet dan saya bookmark tiap alamatnya"),
          new AnswerChoiceModel("C", "Saya kumpulkan berita majalah dan koran yang berisi berita penting"),
          new AnswerChoiceModel("D", "Saya bersama teman - teman menyimpan tiap koran dan majalah ke rak - rak khusus"),
          new AnswerChoiceModel("E", "Saya meminta OB untuk mengkliping koran yang penting"),
        ]
      ),
      new QuestionModel(
        "92",
        "tkp",
        ["Saat makan siang saya mendapatkan makanan yang tidak sesuai dengan pesanan saya. Saya akan..."],
        [
          new AnswerChoiceModel("A", "Marah - marah dan meninggalkan tempat tersebut"),
          new AnswerChoiceModel("B", "Meminta ganti sesuai pesanan"),
          new AnswerChoiceModel("C", "Tetap memakannya dan membayar seperti biasa"),
          new AnswerChoiceModel("D", "Tetap memakannya dan meminta potongan harga"),
          new AnswerChoiceModel("E", "Menerima makanan tersebut, dan memesan lagi seperti keinginan"),
        ]
      ),
      new QuestionModel(
        "93",
        "tkp",
        [
          "Sehubungan dengan pekerjaan Anda, kantor Anda memberikan jatah uang makan sebesar Rp.500.000, - untuk makan siang setiap harinya. Uang tersebut akan diganti sesuai dengan bukti pembayaran makan siang. Namun menurut Anda makan siang Anda selama ini tidak sebesar jumlah tersebut. Oleh karena itu Anda akan...",
        ],
        [
          new AnswerChoiceModel("A", "Tetap makan dengan jumlah tersebut demi mendapatkan uang reimburse"),
          new AnswerChoiceModel("B", "Makan dengan jumlah yang secukupnya menurut Anda"),
          new AnswerChoiceModel("C", "Makan secukupnya tapi memalsukan kwitansinya"),
          new AnswerChoiceModel("D", "Makan secukupnya dengan kwitansi yang sebenarnya"),
          new AnswerChoiceModel("E", "Ikut bagaimana rekan saya yang lain saja"),
        ]
      ),
      new QuestionModel(
        "94",
        "tkp",
        ["Musim hujan mengakibatkan dinding tempat anda bekerja bocor. Maka yang akan anda lakukan adalah ..."],
        [
          new AnswerChoiceModel("A", "Memindahkan benda - benda agar tidak basah"),
          new AnswerChoiceModel("B", "Meminta cleaning service untuk membersihkan"),
          new AnswerChoiceModel("C", "Memindahkan ruang kerja ke area yang lebih nyaman"),
          new AnswerChoiceModel("D", "Segera memanggil tukang bangunan"),
          new AnswerChoiceModel("E", "Memindahkan ruang kerja agar tukang bangunan dapat bekerja maksimal"),
        ]
      ),
      new QuestionModel(
        "95",
        "tkp",
        ["Jika salah seorang bawahan saya melakukan tugas yang saya berikan kepadanya dengan sangat baik, maka saya ..."],
        [
          new AnswerChoiceModel("A", "Puas, namun tak memuji karena hal itu akan membuatnya sombong"),
          new AnswerChoiceModel("B", "Tak akan memuji"),
          new AnswerChoiceModel("C", "Memuji setinggi langit agar dia juga senang kepada saya"),
          new AnswerChoiceModel("D", "Memuji secara proposional"),
          new AnswerChoiceModel("E", "Berpura-pura tidak tahu akan keberhasilannya melakukan tugas"),
        ]
      ),
      new QuestionModel(
        "96",
        "tkp",
        ["Bila ada rekan kerja yang salah memanggil nama saya, maka saya .."],
        [
          new AnswerChoiceModel("A", "Saya tersinggung, karena nama adalah kehornatan seseorang"),
          new AnswerChoiceModel("B", "Saya tidak tersinggung"),
          new AnswerChoiceModel("C", "Saya mengingatkan kekeliruannya dengan baik-baik"),
          new AnswerChoiceModel("D", "Saya mengingatkannya dengan tegas agar dia jera"),
          new AnswerChoiceModel("E", "Hal seperti itu tak menjadi masalah bagi saya"),
        ]
      ),
      new QuestionModel(
        "97",
        "tkp",
        ["Hal pertama yang akan saya lakukan saat saya memasuki tempat kerja yang baru adalah..."],
        [
          new AnswerChoiceModel("A", "Mempelajari sistem kerja di tempat tersebut dari peraturan dan data"),
          new AnswerChoiceModel("B", "Mencari tahu apa yang harus saya kerjakan"),
          new AnswerChoiceModel("C", "Menunggu perintah kerja dari atasan"),
          new AnswerChoiceModel("D", "Mengamati sistem kerja pegawai di tempat kerja tersebut"),
          new AnswerChoiceModel("E", "Menyapa rekan kerja baru dan bertanya tentang sistem kerja di tempat tersebut"),
        ]
      ),
      new QuestionModel(
        "98",
        "tkp",
        ["Anda baru saja mendapat teman satu tim. Maka anda dan rekan kerja anda akan ..."],
        [
          new AnswerChoiceModel("A", "Bersaing untuk mendapatkan simpati atasan"),
          new AnswerChoiceModel("B", "Mengerjakan tugas masing - masing"),
          new AnswerChoiceModel("C", "Berusaha saling menjatuhkan demi membangun simpati"),
          new AnswerChoiceModel("D", "Mengenal rekan kerja dengan sering pergi bersama setelah pulang"),
          new AnswerChoiceModel("E", "Berusaha saling memahami dan bahu - membahu dengan maksimal"),
        ]
      ),
      new QuestionModel(
        "99",
        "tkp",
        ["Anda adalah pimpinan pada suatu rapat penting kemudian anda mendapat kabar bahwa istri/ suami anda mengalami kecelakaan, maka anda akan ..."],
        [
          new AnswerChoiceModel("A", "Melanjutkan rapat karena harus bersikap profesional"),
          new AnswerChoiceModel("B", "Pura - pura tidak tahu"),
          new AnswerChoiceModel("C", "Menanyakan keadaan terlebih dahulu"),
          new AnswerChoiceModel("D", "Menyuruh saudara untuk mengurus istri/ suami anda"),
          new AnswerChoiceModel("E", "Panik"),
        ]
      ),
      new QuestionModel(
        "100",
        "tkp",
        ["Tempat saya bekerja mengalami pergantian kepala kantor. Padahal saya sangat dekat dengan kepala kantor yang lama. Saya akan ..."],
        [
          new AnswerChoiceModel("A", "Berusaha dekat dengan kepala kantor yang baru"),
          new AnswerChoiceModel("B", "Tidak mau dekat dengan kepala kantor yang baru"),
          new AnswerChoiceModel("C", "Tidak semangat dalam bekerja"),
          new AnswerChoiceModel("D", "Segera menyesuaikan diri dengan pola kerja yang baru"),
          new AnswerChoiceModel("E", "Tidak terpengaruh masalah pergantian kepala kantor"),
        ]
      ),
      new QuestionModel(
        "101",
        "tkp",
        [
          "Rachmat menduduki jabatan penyedia di perusahaan. Belum lama ini, beberapa karyawan yang baru diterima memeluk agama yang termasuk ke dalam kelompok minoritas. Suatu kondisi yang memberikan nuasa yang berbeda dari waktu-waktu sebelumnya. Dalam hal ini, Rachmat ...",
        ],
        [
          new AnswerChoiceModel("A", "Menunjukkan kepada rekan kerjanya bahwa saling menghargai keyakinan adalah hal yang mudah di lakukan"),
          new AnswerChoiceModel("B", "Mempelajari apa yang mereka butuhkan dan membangun rasa saling menghargai"),
          new AnswerChoiceModel("C", "Mencoba menghargai apa yang menjadi keyakinan mereka"),
          new AnswerChoiceModel("D", "Tidak terlalu peduli dengan keadaan tersebut karena masalah agama bukan urusannya"),
          new AnswerChoiceModel("E", "Menghargai keyakinan mereka tanpa harus merasa terganggu"),
        ]
      ),
      new QuestionModel(
        "102",
        "tkp",
        [
          "Anda memutuskan untuk memberikan ponsel pada adik anda yang berusia 16 tahun hal pertama yang harus dilakukan saat pertama kali memberi ponsel pada adik anda yaitu",
        ],
        [
          new AnswerChoiceModel("A", "Membiarkan adik anda bermain ponsel sendiri"),
          new AnswerChoiceModel("B", "Mencoba untuk selektif dalam memilih pertemanan dan lingkungan adik"),
          new AnswerChoiceModel(
            "C",
            "Menjelaskan bagaimana menggunakan ponsel secara bijaksana baik secara agama maupun dari sisi kebangsaan sehingga tidak salah penggunaannya"
          ),
          new AnswerChoiceModel("D", "Membatasi fitur pada ponsel sehingga tidak ada konten yang mengandung radikalisme"),
          new AnswerChoiceModel("E", "Memutuskan untuk tidak memberikan ponsel hingga cukup usia"),
        ]
      ),
      new QuestionModel(
        "103",
        "tkp",
        [
          "Kamu memiliki client yang telah menjadi bagian dari perusahaan selama bertahun-tahun. Suatu hari, client tersebut dilayani oleh salah satu rekan kerja kamu. Dan ia melakukan sesuatu yang tidak disukai client tersebut. Bagaimana sikap anda dalam situasi tersebut?",
        ],
        [
          new AnswerChoiceModel("A", "Meminta maaf atas nama rekan kerja anda"),
          new AnswerChoiceModel("B", "Mengucapkan terimakasih banyak kepada client tersebut dan menjadikan sebagai tolak ukur kinerja anda"),
          new AnswerChoiceModel("C", "Mendengarkan keluhan tersebut dengan seksama dan akan ditindaklanjuti."),
          new AnswerChoiceModel("D", "Mendengarkan keluhan tersebut dengan seksama dan langsung chatting ke rekan kerja anda yang dimaksudkan."),
          new AnswerChoiceModel("E", "Mendengarkan keluhan tersebut dengan seksama dan akan melaporkan ke atasan/pihak yang bewenang."),
        ]
      ),
      new QuestionModel(
        "104",
        "tkp",
        [
          "Pak Ahmad selaku pemuka agama di Desa Maju, telah mendapatkan bantuan 100 juta. Sebagian masyarakat menginginkan dana itu digunakan untuk renovasi masjid. Sebagian masyarakat yang lain menginginkannya untuk membeli alat kesenian. Kebetulan saat itu ada penawaran alat kesenian dengan harga special. Sikap yang sebaiknya diambil Pak Ahmad adalah",
        ],
        [
          new AnswerChoiceModel("A", "membicarakan permasalahan tersebut pada rapat bulanan sambll menunggu masukan dari warga"),
          new AnswerChoiceModel("B", "memutuskan secara pribadl peruntukan alokasi dana daripada menunggu keputusan warga yang tidak jelas waktunya"),
          new AnswerChoiceModel("C", "mengadakan rapat dengan warga karena tidak ingin disalahkan warga"),
          new AnswerChoiceModel("D", "tidak membuat keputusan sebelum ada warga yang menanyakan tentang alokasi dana"),
          new AnswerChoiceModel("E", "membangun komunikasi dengan warga dan mendengarkan aspirasi sebelum mengambil keputusan"),
        ]
      ),
      new QuestionModel(
        "105",
        "tkp",
        [
          "Saat pergi ke kantor, seorang karyawan sering kali menghabiskan waktu sebelum bekerja untuk diskusi dengan teman-temannya. Namun ia selalu membicarakan mengenai organisasi berbasis agama dan mengajak teman lainnya untuk bergabung. teman-teman satu divisi anda kurang nyaman, hal yang dilakukan oleh anda adalah",
        ],
        [
          new AnswerChoiceModel("A", "Cukup diam karena bukan urusan anda"),
          new AnswerChoiceModel("B", "Melaporkan kepada atasan agar ditindak dengan cepat"),
          new AnswerChoiceModel("C", "Mencoba untuk mengingatkan agar tidak memaksa dan mengajak ke organisasi radikalisme"),
          new AnswerChoiceModel("D", "Ikut bergabung"),
          new AnswerChoiceModel("E", "Mengatakan kepada teman-teman untuk menolak ajakannya"),
        ]
      ),
      new QuestionModel(
        "106",
        "tkp",
        [
          "Andre dan juga Kadek merupakan teman dekat sejak kecil mereka selalu bersama dan juga pergi ke sekolah. Pada suatu hari, Kadek harus izin sekolah karena orang tuanya tengah mengadakan acara besar, untuk memperingati hari raya umat Hindu lalu apa yang harus dilakukan oleh Andre?",
        ],
        [
          new AnswerChoiceModel("A", "Menjaga ketenangan dan juga menyampaikan informasi bahwa kadek izin untuk bisa melakukan hari raya sesuai agamanya"),
          new AnswerChoiceModel("B", "Menghormati hari raya ataupun acara yang diperingati oleh Kadek"),
          new AnswerChoiceModel("C", "Membiarkan Kadek untuk bisa beribadah dengan khusyuk dan bermain dengannya keesokan harinya"),
          new AnswerChoiceModel("D", "Menjelaskan dengan baik kepada teman kelas apa yang dilakukan oleh Kadek di rumah"),
          new AnswerChoiceModel("E", "Diam saja karena bukan urusan andre"),
        ]
      ),
      new QuestionModel(
        "107",
        "tkp",
        [
          "Anda telah memasukkan data yang salah mengenai biaya perjalanan dinas rekan-rekan kerja Anda dari yang berada di unit teknis. Kesalahan yang Anda lakukan sangat fatal, yaitu biaya perjalanan yang seharusnya sebesar Rp 40.000.000,00 dicatat sebesar Rp 4.000.000. Sehingga terdapat selisih Rp36.000.000,00 pada jumlah total. Beruntung karena dokumen itu belum diselesaikan. Sebagai staff yang jujur dan konsekuen, maka yang Anda akan lakukan adalah ?",
        ],
        [
          new AnswerChoiceModel("A", "Siap menerima konsekuensi dan siap digantikan oleh siapapun yang lebih berkompeten dari saya"),
          new AnswerChoiceModel("B", "Berdiskusi dengan atasan bagaimana tindak selanjutnya dari kesalahan yang saya lakukan"),
          new AnswerChoiceModel(
            "C",
            "Meminta maaf kepada pihak yang terkait dan menyelesaikan potensi kerugian negara tersebut melalui sidang penyalahgunaan keuangan"
          ),
          new AnswerChoiceModel("D", "Bersedia mengganti rugi atas nominal yang diinput dan bersedia posisi saya diganti akibat kelalaian saya "),
          new AnswerChoiceModel("E", "Bertanggung jawab atas apa yang sudah saya lakukan"),
        ]
      ),
      new QuestionModel(
        "108",
        "tkp",
        [
          "Tahun ini, pelaksanaan rangkaian perayaan ulang tahun Sunny Company bertepatan dengan Bulan Puasa. Sebagian besar karyawan mengkhawatirkan waktu pelaksanaan dapat mengganggu karyawan yang sedang berpuasa. Sebagai ketua pelaksana kegiatan, hal yang dilakukan Sunny adalah ...",
        ],
        [
          new AnswerChoiceModel("A", "mendengarkan semua masukan dari rekan-rekan kerjanya"),
          new AnswerChoiceModel("B", "melaksanakan kegiatan sesuai dengan direncanakannya"),
          new AnswerChoiceModel("C", "melaksanakan kegiatan sesuai jadwal tahun-tahun sebelumnya"),
          new AnswerChoiceModel("D", "mendengarkan masukan dari semua pihak dan memutuskan bersama jalan terbaiknya"),
          new AnswerChoiceModel("E", "menerima masukan dari rekan kerja yang lain, jika tidak mengubah yang direncanakan"),
        ]
      ),
      new QuestionModel(
        "109",
        "tkp",
        [
          "Pagi ini, kamu datang terburu-buru ke kantor, hal ini karena jalanan yang macet sekali sehingga kendaraan yang kamu bawa tidak bisa bergerak dan terjebak cukup lama di jalan raya, sehingga kamu hampir terlambat untuk tiba di kantor. Sedangkan semua karyawan melakukan absensi berbasis teknologi dimana jika terlambat melakukan presensi, maka akan dianggap tidak hadir. Namun, kamu melihat seorang wanita yang kebingungan mencari tempat pelayanan ketika kamu ingin bergegas ke tempat absensi. Sedangkan satpam yang biasa bertugas belum hadir, apa yang akan kamu lakukan?",
        ],
        [
          new AnswerChoiceModel("A", "Memberitahu arah tempat layanan tersebut kemudian absen"),
          new AnswerChoiceModel("B", "Menyuruh menunggu karena petugas belum hadir"),
          new AnswerChoiceModel("C", "Menyapa ibu itu dan menanyakan keperluannya, kemudian kamu tinggal"),
          new AnswerChoiceModel("D", "Mengajak ibu itu untuk ikut kamu absen sehingga bisa menanyakan keperluan dan mengantarkannya"),
          new AnswerChoiceModel("E", "Mengantarkannya ke tempat yang dia tuju baru absen"),
        ]
      ),
      new QuestionModel(
        "110",
        "tkp",
        [
          "Hari ini merupakan salah satu hari, dimana diumumkan akan adanya demo besar-besaran, untuk memprotes sebuah program, yang diberikan atau dilancarkan oleh pemerintah sikap anda sebagai ASN",
        ],
        [
          new AnswerChoiceModel("A", "Mencoba mencari kejelasan informasi tersebut dan tetap fokus untuk bisa bekerja dengan baik"),
          new AnswerChoiceModel("B", "Mengajak atau mencoba untuk ikut turun dan terjun demo pada hari yang sama"),
          new AnswerChoiceModel(
            "C",
            "Mencoba untuk bersikap netral hingga mendapatkan informasi yang jelas mengingat protes yang dilakukan merupakan hal yang sangat wajar pada sebuah program"
          ),
          new AnswerChoiceModel("D", "Menyetujui adanya program tersebut karena anda adalah seorang pegawai negara"),
          new AnswerChoiceModel("E", "Mencoba untuk mengkritisi program tersebut"),
        ]
      ),
    ]),
  ];

  const tryout = tryoutList[parseInt(tryoutId, 10) - 1]; // TryoutModel
  const questions = tryout.getQuestions(); // method in TryoutModel
  const question = questions[questionNumber - 1]; // QuestionModel
  const questionParagraphs = question.getQuestText(); // method in QuestionModel
  const questCategory = question.getCategory().toUpperCase();
  const answerChoices = question.getAnswerChoice();
  // const choiceA = answerChoice[0].getChoiceText();
  // const choiceB = answerChoice[1].getChoiceText();
  // const choiceC = answerChoice[2].getChoiceText();
  // const choiceD = answerChoice[3].getChoiceText();
  // const choiceE = answerChoice[4].getChoiceText();

  const answerChosen = userAnswers[questionNumber - 1].answerChosen;
  const isAnswerSaved = userAnswers[questionNumber - 1].isAnswerSaved;
  const isQuestionClicked = userAnswers[questionNumber - 1].isQuestionClicked;

  return (
    <article className="ma4 br3 ba b--black-10 w-100 w-100-m w-100-l h-25 mw6 tl shadow-5">
      <div className="pl4 lh-copy measure f7 f5-ns black-70">
        <p className="b">{questCategory}</p>
        <p>{`Soal No. ${questionNumber}`}</p>
        <Question questionParagraphs={questionParagraphs} />
        <AnswerChoices
          questId={questionNumber}
          answerChoices={answerChoices}
          onUserAnswerChange={onUserAnswerChange}
          answerChosen={answerChosen}
          isAnswerSaved={isAnswerSaved}
          isQuestionClicked={isQuestionClicked}
          currentAnswer={currentAnswer}
        />
      </div>
    </article>
  );
};

export default QuestionAnswer;
