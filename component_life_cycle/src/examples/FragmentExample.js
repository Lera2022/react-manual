function FragmentExample() {
    return (
        <>
            <span>This is right!</span>
            <div>Краткая запись фрагмента</div>
        </>
    );
}
    // или
function FragmentExample2() {
    return (
        <React.Fragment>
            <span>This is right!</span>
            <div>Полная запись фрагмента</div>
        </React.Fragment>
    );
}