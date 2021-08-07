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
        "Sesuai dengan prinsip otonomi dan tugas pembantuan, pemerintah daerah provinsi, kabupaten, dan kota melaksanakan tugas pemerintahan untuk mengurus persoalan pemerintahan sendiri. Pernyataan tersebut tertuang dalam ...",
        [
          new AnswerChoiceModel("A", "A. UU No. 13 Tahun 2004 tentang Otonomi Daerah"),
          new AnswerChoiceModel("B", "B. UUD 1945 Pasal 18 Ayat 1"),
          new AnswerChoiceModel("C", "C. UUD 1945 Pasal 18 Ayat 2"),
          new AnswerChoiceModel("D", "D. Permen No. 11 Tahun 2004"),
          new AnswerChoiceModel("E", "E. Tap MPR No. 44 Tahun 2004"),
        ]
      ),
      new QuestionModel(
        "2",
        "twk",
        "Dalam rangka membina rasa nasionalis di kalangan masyarakat Indonesia hendaknya dilakukan dengan menghindari hal-hal dibawah ini , kecuali...",
        [
          new AnswerChoiceModel("A", "A. Patriotisme"),
          new AnswerChoiceModel("B", "B. Sukuisme"),
          new AnswerChoiceModel("C", "C. Chauvinisme"),
          new AnswerChoiceModel("D", "D. Ekstrimisme"),
          new AnswerChoiceModel("E", "E. Fanatik golongan"),
        ]
      ),
      new QuestionModel("3", "twk", "pertanyaan3TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("4", "twk", "pertanyaan4TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("5", "twk", "pertanyaan5TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("6", "twk", "pertanyaan6TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("7", "twk", "pertanyaan7TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("8", "twk", "pertanyaan8TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("9", "twk", "pertanyaan9TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("10", "twk", "pertanyaan10TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("11", "twk", "pertanyaan11TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("12", "twk", "pertanyaan12TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("13", "twk", "pertanyaan13TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("14", "twk", "pertanyaan14TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("15", "twk", "pertanyaan15TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("16", "twk", "pertanyaan16TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("17", "twk", "pertanyaan17TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("18", "twk", "pertanyaan18TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("19", "twk", "pertanyaan19TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("20", "twk", "pertanyaan20TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("21", "twk", "pertanyaan21TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("22", "twk", "pertanyaan22TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("23", "twk", "pertanyaan23TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("24", "twk", "pertanyaan24TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("25", "twk", "pertanyaan25TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("26", "twk", "pertanyaan26TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("27", "twk", "pertanyaan27TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("28", "twk", "pertanyaan28TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("29", "twk", "pertanyaan29TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("30", "twk", "pertanyaan30TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("31", "tiu", "pertanyaan31TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("32", "tiu", "pertanyaan32TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("33", "tiu", "pertanyaan33TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("34", "tiu", "pertanyaan34TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("35", "tiu", "pertanyaan35TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("36", "tiu", "pertanyaan36TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("37", "tiu", "pertanyaan37TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("38", "tiu", "pertanyaan38TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("39", "tiu", "pertanyaan39TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("40", "tiu", "pertanyaan40TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("41", "tiu", "pertanyaan41TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("42", "tiu", "pertanyaan42TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("43", "tiu", "pertanyaan43TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("44", "tiu", "pertanyaan44TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("45", "tiu", "pertanyaan45TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("46", "tiu", "pertanyaan46TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("47", "tiu", "pertanyaan47TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("48", "tiu", "pertanyaan48TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("49", "tiu", "pertanyaan49TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("50", "tiu", "pertanyaan50TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("51", "tiu", "pertanyaan51TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("52", "tiu", "pertanyaan52TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("53", "tiu", "pertanyaan53TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("54", "tiu", "pertanyaan54TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("55", "tiu", "pertanyaan55TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("56", "tiu", "pertanyaan56TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("57", "tiu", "pertanyaan57TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("58", "tiu", "pertanyaan58TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("59", "tiu", "pertanyaan59TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("60", "tiu", "pertanyaan60TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("61", "tiu", "pertanyaan61TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("62", "tiu", "pertanyaan62TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("63", "tiu", "pertanyaan63TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("64", "tiu", "pertanyaan64TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("65", "tiu", "pertanyaan65TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("66", "tkp", "pertanyaan66TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("67", "tkp", "pertanyaan67TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("68", "tkp", "pertanyaan68TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("69", "tkp", "pertanyaan69TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("70", "tkp", "pertanyaan70TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("71", "tkp", "pertanyaan71TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("72", "tkp", "pertanyaan72TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("73", "tkp", "pertanyaan73TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("74", "tkp", "pertanyaan74TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("75", "tkp", "pertanyaan75TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("76", "tkp", "pertanyaan76TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("77", "tkp", "pertanyaan77TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("78", "tkp", "pertanyaan78TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("79", "tkp", "pertanyaan79TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("80", "tkp", "pertanyaan80TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("81", "tkp", "pertanyaan81TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("82", "tkp", "pertanyaan82TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("83", "tkp", "pertanyaan83TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("84", "tkp", "pertanyaan84TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("85", "tkp", "pertanyaan85TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("86", "tkp", "pertanyaan86TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("87", "tkp", "pertanyaan87TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("88", "tkp", "pertanyaan88TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("89", "tkp", "pertanyaan89TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("90", "tkp", "pertanyaan90TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("91", "tkp", "pertanyaan91TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("92", "tkp", "pertanyaan92TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("93", "tkp", "pertanyaan93TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("94", "tkp", "pertanyaan94TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("95", "tkp", "pertanyaan95TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("96", "tkp", "pertanyaan96TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("97", "tkp", "pertanyaan97TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("98", "tkp", "pertanyaan98TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("99", "tkp", "pertanyaan99TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("100", "tkp", "pertanyaan100TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("101", "tkp", "pertanyaan101TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("102", "tkp", "pertanyaan102TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("103", "tkp", "pertanyaan103TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("104", "tkp", "pertanyaan104TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("105", "tkp", "pertanyaan105TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("106", "tkp", "pertanyaan106TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("107", "tkp", "pertanyaan107TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("108", "tkp", "pertanyaan108TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("109", "tkp", "pertanyaan109TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
      new QuestionModel("110", "tkp", "pertanyaan110TO4 ?", [
        new AnswerChoiceModel("A", "pilihanA"),
        new AnswerChoiceModel("B", "pilihanB"),
        new AnswerChoiceModel("C", "pilihanC"),
        new AnswerChoiceModel("D", "pilihanD"),
        new AnswerChoiceModel("E", "pilihanE"),
      ]),
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
