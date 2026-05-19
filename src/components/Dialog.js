
function Dialog(props){
    const closeBox = () => {
        props.close();
    }
    return(
        <section className="popup-screen">
            <div className="popup-card">
                <h2>Welcome!</h2>
                <p>Please rate your Experience</p>
                <button className="close-button" onClick={closeBox}>
                 Start Rating
                </button>
            </div>
        </section>
    );
}

export default Dialog;