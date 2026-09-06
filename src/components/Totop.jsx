function Totop() {
    const handleClick = (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="toTopContainer">
        <a href="#top" className="toTop" onClick={handleClick}>^</a>
        </div>
        )};

export default Totop