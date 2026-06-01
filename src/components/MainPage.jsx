function MainPage() {
  const links = [
    {
      title: 'Scratch',
      url: 'https://scratch.mit.edu/users/sironekotaimarisa/',
      image: '/images/scratch_image.png',
      alt: 'Scratch'
    },
    {
      title: '空想鉄道',
      url: 'https://ku-tetsu.net/458298.html',
      image: '/images/image.png',
      alt: 'ku-tetsu'
    },
    {
      title: 'Lit',
      url: 'https://lit.link/sironekotaimarisa',
      image: '/images/image.png',
      alt: 'lit'
    },
    {
      title: 'raillab',
      url: 'https://raillab.jp/member/sironekotaimarisa',
      image: '/images/image.png',
      alt: 'raillab'
    },
    {
      title: 'scratch鉄道wiki',
      url: 'https://scratchrailway.miraheze.org/wiki/利用者:白猫隊魔理沙',
      image: '/images/image.png',
      alt: 'way_wiki'
    },
    {
      title: 'YouTube',
      url: 'https://www.youtube.com/@白猫隊魔理沙',
      image: '/images/image.png',
      alt: 'youtube'
    }
  ];

  return (
    <div id="main">
      <p className="about">ようこそ、ShironekotaiMarisaのウェブサイトへ</p>
      <p className="about">ここでは、私について紹介しています。</p>
      <h2>私の活動</h2>
      <div className="links-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <div className="link-image">
              <h3 className="link">{link.title}</h3>
              <img src={link.image} alt={link.alt} width="100" height="100" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
