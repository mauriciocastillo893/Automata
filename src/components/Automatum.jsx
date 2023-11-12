import '../style-sheets/Automatum.css'

function Automatum() {
    return (  
        <div className='main-container'>
            <div className='header'>
                <div className='header-content'>ZORN INDUSTRIES</div>
            </div>
            <div className='content'>
                <div className='first-content'>
                    <div className='title-f-c'></div>
                    <textarea className='description' />
                </div>
                <div className="second-content">
                    <div className="second-one-content">
                        <div className='title-s-o-c'></div>
                        <textarea className="code" />
                    </div>
                    <div className="second-two-content">
                        <div className='title-s-t-c'></div>
                        <textarea className="terminal" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Automatum;