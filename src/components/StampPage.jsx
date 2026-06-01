import stampImageHaveGoodTrip from '../assets/images/stamp/have_good_trip.png';
import stampImageHello from '../assets/images/stamp/hello.png';
import stampImageImHome from '../assets/images/stamp/im_home.png';
import stampImageSorry from '../assets/images/stamp/sorry.png';
import stampImageSure from '../assets/images/stamp/sure.png';
import stampImageThank from '../assets/images/stamp/thank_you.png';
import stampImageUmm from '../assets/images/stamp/umm.png';
import stampImageWelcomeBack from '../assets/images/stamp/welcome_back.png';
import stampImageWellDone from '../assets/images/stamp/well_done.png';
import stampImageYeah from '../assets/images/stamp/yeah.png';

function StampPage() {
  const stamps = [
    { label: 'ありがとう', image: stampImageThank, alt: 'ありがとう' },
    { label: 'いいね', image: stampImageSure, alt: 'いいね' },
    { label: 'いってらっしゃい', image: stampImageHaveGoodTrip, alt: 'いってらっしゃい' },
    { label: 'うーん', image: stampImageUmm, alt: 'うーん' },
    { label: 'うん', image: stampImageYeah, alt: 'うん' },
    { label: 'おかえり', image: stampImageWelcomeBack, alt: 'おかえり' },
    { label: 'お疲れ様', image: stampImageWellDone, alt: 'お疲れ' },
    { label: 'こんにちは', image: stampImageHello, alt: 'こんにちは' },
    { label: 'ごめん', image: stampImageSorry, alt: 'ごめん' },
    { label: 'ただいま', image: stampImageImHome, alt: 'ただいま' }
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
