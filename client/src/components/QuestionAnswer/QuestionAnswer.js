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
  questText;
  answerChoice;

  constructor(questId, category, questText, answerChoice) {
    this.questId = questId;
    this.category = category;
    this.questText = questText;
    this.answerChoice = answerChoice;
  }

  getCategory = () => {
    return this.category;
  };

  getQuestText = () => {
    return this.questText;
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
  ];

  const tryout = tryoutList[parseInt(tryoutId, 10) - 1]; // TryoutModel
  const questions = tryout.getQuestions(); // method in TryoutModel
  const question = questions[questionNumber - 1]; // QuestionModel
  const questionText = question.getQuestText(); // method in QuestionModel
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
        <Question questionText={questionText} />
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
