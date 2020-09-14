import React, {useState} from 'react';

let flag = false;

function Main() {
    const [value, setValue] = useState(0)
    const [con, setConcat] = useState({value1: "", type: "", value2: "", result: 0})
    const [operator, setOperator] = useState()

    const getValue = (e) => {
        const btnValue = e.target.value;

        if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/") {
            flag = true;
            const setType = {...con, type: btnValue}
            setConcat(setType);
        } else {
            if (flag === false) {
                if (con.value1 === "" && btnValue === "0") {
                    setConcat({...con, value1: "0."});
                } else {
                    const setValue1 = {...con, value1: con.value1.concat(String(btnValue))}
                    setConcat(setValue1);
                }
            } else {
                if (con.value2 === "" && btnValue === "0") {
                    setConcat({...con, value2: "0."})
                } else {
                    const setValue2 = {...con, value2: con.value2.concat(String(btnValue))}
                    setConcat(setValue2);
                }
            }

        }
        console.log(flag)
    }

    const calc = () => {
        const value1 = parseFloat(con.value1)
        const value2 = parseFloat(con.value2)
        flag = false
        switch (con.type) {
            case "+":
                setConcat({...con, value1: String(value1 + value2), value2: "", type: ""})
                break
            case "-":
                setConcat({...con, value1: String(value1 - value2), value2: "", type: ""})
                break
            case "*":
                setConcat({...con, value1: String(value1 * value2), value2: "", type: ""})
                break
            case "/":
                setConcat({...con, value1: String(value1 / value2), value2: "", type: ""})
                break
            default:
                setConcat({...con, value1: ""})
        }
    }

    console.log(con);
    return (
        <div className="text-center d-flex flex-column justify-content-center" style={{width: "20rem"}}>
            <div className="bg-light text-center">
                <form>
                    <div className="form-group">
                        <input className="form-control" type="text"
                               value={con.result ? con.result : `${con.value1 || ''}${con.type || ''}${con.value2 || ''}`}/>
                    </div>
                </form>
            </div>
            <div>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="d-flex w-100">
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="1"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="2"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="3"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="+"/>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="4"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="5"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="6"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="-"/>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="7"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="8"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="9"/>
                        </div>
                        <div className="flex-fill p-1">
                            <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                                   value="*"/>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-100">
                    <div className="p-1 flex-grow-1">
                        <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                               value="0"/>
                    </div>
                    <div className="p-1">
                        <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                               value="."/>
                    </div>
                    <div className="p-1">
                        <input onClick={(e) => getValue(e)} type="button" className="btn btn-primary btn-block"
                               value="/"/>
                    </div>
                </div>
                <div>
                    <input onClick={() => calc()} type="button" className="btn btn-primary btn-block" value="="/>
                </div>
            </div>

        </div>
    );
}

export default Main;