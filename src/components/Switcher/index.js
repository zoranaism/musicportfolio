import React, {useState, useEffect} from 'react';
import '../../assets/scss/switcher.scss'

const Switcher = () => {

    const [colorVersion, setColorVersion] = useState('color-var-0');

    // Set Default Color On Body
    const body = document.querySelector('body');
    body.classList.add(colorVersion);

    // Switcher Handler
    const customizerHandler = e => {
        e.target.parentNode.classList.toggle('open');
    };

    // Color Picker Handler
    const colorPickHandler = e => {
        setColorVersion(e.target.dataset.color);
        body.classList.toggle(colorVersion);
    };

    // Theme Switch Handler
    const themeHandler = e => {
        e.target.classList.toggle('active');
        body.classList.toggle('dark-version');
    };

    useEffect(() => {
        // Check Theme Version
        const btnTheme = document.querySelector(".btn-theme");
        if (body.classList.contains('dark-version')) {
            btnTheme.classList.add('active');
        }
    });

    const colorLists = {
        "color-var-0": "#212121",
        "color-var-1": "#E65B1C",
        "color-var-2": "#f15445",
        "color-var-3": "#51becd",
        "color-var-4": "#e59701"
    };

    let coloPickItem = [];
    for (let color in colorLists) {
        coloPickItem.push(
            <li
                key={color}
                onClick={colorPickHandler}
                data-color={color}
                style={{backgroundColor: `${colorLists[color]}`}}
            />
        )
    }
    return (
        <div className="customizer-wrap">
            <button className="customizer-toggle" onClick={customizerHandler}>
                <i className="fa fa-cog fa-spin" style={{pointerEvents: "none"}}/>
            </button>
            <div className="customizer-inner">
                <div className="customizer-item">
                    <h4>Chose Color</h4>
                    <ul className="color-setting">
                        {coloPickItem}
                    </ul>
                </div>

                <div className="customizer-item mt-25">
                    <h4>Switch Theme</h4>
                    <button className="btn-theme" onClick={themeHandler}>
                        <span className='ball'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Switcher;