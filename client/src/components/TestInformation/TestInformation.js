const TestInformation = ({ totalAnswered, onRouteChange, tryoutId, onSubmitTest, countScore, onSubmitResult }) => {
  return (
    <article className="br3 ba b--black-10 w-100 w-50-m w-100-l h-25 mw6 shadow-5 center">
      <div className="lh-copy measure center f7 f5-ns black-70">
        <p>Batas Waktu : 100 menit</p>
        <p>Jumlah Soal : 110 soal</p>
        <p>{`Soal Dijawab : ${totalAnswered}`}</p>
        <p>{`Belum Dijawab : ${110 - totalAnswered}`}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitTest(tryoutId, countScore, onRouteChange, onSubmitResult);
          }}
        >
          <input className="button f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" type="submit" value="Selesai Ujian" />
          <div className="mb2">
            <input type="checkbox" id="finish" required />
            <label className="ml2" htmlFor="finish">
              Saya yakin telah selesai
            </label>
          </div>
        </form>
      </div>
    </article>
  );
};

export default TestInformation;
