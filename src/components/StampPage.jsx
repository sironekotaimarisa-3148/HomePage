function StampPage() {
  const stamps = [
    { label: 'ありがとう', image: '/images/stamp/thank_you.png', alt: 'ありがとう' },
    { label: 'いいね', image: '/images/stamp/sure.png', alt: 'いいね' },
    { label: 'いってらっしゃい', image: '/images/stamp/have_good_trip.png', alt: 'いってらっしゃい' },
    { label: 'うーん', image: '/images/stamp/umm.png', alt: 'うーん' },
    { label: 'うん', image: '/images/stamp/yeah.png', alt: 'うん' },
    { label: 'おかえり', image: '/images/stamp/welcome_back.png', alt: 'おかえり' },
    { label: 'お疲れ様', image: '/images/stamp/well_done.png', alt: 'お疲れ' },
    { label: 'こんにちは', image: '/images/stamp/hello.png', alt: 'こんにちは' },
    { label: 'ごめん', image: '/images/stamp/sorry.png', alt: 'ごめん' },
    { label: 'ただいま', image: '/images/stamp/im_home.png', alt: 'ただいま' }
  ];

  return (
    <div id="main">
      <h2>スタンプ</h2>
      <div className="stamp-container">
        {stamps.map((stamp, index) => (
          <div key={index} className="stamp-item">
            <div className="stamp">{stamp.label}</div>
            <img src={stamp.image} alt={stamp.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StampPage;
