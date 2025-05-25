
function Hello (){

    let myName = 'Amit';
    let number = 444;
    let fullName = () => {
        return 'Amit Rajput';
    }
    return<p>
        MessageNo : {number} I am your master {fullName ()}
    </p>
}
export default Hello;