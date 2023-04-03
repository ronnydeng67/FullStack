import { useEffect, useState } from 'react';
import './ShowStoreInfo.css';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Box } from '@mui/system';


const ShowStoreInfo = (ref) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles: SxProps = {
        position: 'absolute',
        top: 70,
        right: 0,
        left: -78,
        zIndex: 1,
        border: '1px solid grey',
        p: 1,
        bgcolor: 'white',
        width: 320,
        height: 260
    };
    return (
        // <>
        //     <div className="store-finder" onClick={handleModal}>
        //         <i className="fa-solid fa-shop"></i>
        //         <p style={{fontFamily: "bestbuy-medium", fontSize: "1.3rem"}}>&nbsp;Union Square</p>
        //     </div>
        //     {showModal && (
        //         <div className="store-container">

        //         </div>
        //     )}
        // </>
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
            <button className="store-finder" onClick={handleClick}>
                 <i className="fa-solid fa-shop"></i>
                 <p style={{fontFamily: "bestbuy-medium", fontSize: "1.3rem"}}>&nbsp;Union Square</p>
             </button>
                {open ? (
                <Box sx={styles}>
                    Union Square
                </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
}
 
export default ShowStoreInfo