
function Dialog(props){
    const closeBox = () => {
        props.close();
    }
    return(
        <section className="popup-screen">
            <div className="popup-card">
                <h2>Hello</h2>
                <p>Please select your rating</p>
                <button className="close-button" onClick={closeBox}>
                 Close
                </button>
            </div>
        </section>
    );
}

export default Dialog;