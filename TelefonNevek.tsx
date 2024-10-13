import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Root } from "./technikaiKutyuk";
import { Phone } from "./technikaiKutyuk";


export function TelefonNevek() {

    const [phoneData, setPhoneData] = useState<Phone[]>([])



    useEffect(() => {
        async function load() {
            const res = await fetch("/technikaiKutyuk.json");
            const phone: Root = await res.json();
            setPhoneData(phone.phones)
            console.log(phone.phones[0])
        }
        load()
    }, [])

    return (
        <>
            <div className="bg-secondary" style={{width:"fit-Content",margin:"auto"}}  >

                <div className="table-dark table table-striped table-hover">

                    <p>
                        {
                            phoneData.map((phone: Phone) => <tr> <td>{phone.model}</td> <td>{phone.brand}</td>   </tr>)
                        }
                    </p>

                </div>
            </div>

        </>
    )





}