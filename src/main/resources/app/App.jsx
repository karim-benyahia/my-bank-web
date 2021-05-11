import React, {Component} from "react";
import Ligne from "./component/Ligne";


export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            libelle:props.libelle,
            lignes:[]

        };
    }

    componentDidMount() {
        fetch("/api/ligne-bancaire")
            .then(response=>response.json())
            .then(lignes => {
                console.log(lignes);
                this.setState({lignes})
            })
    }

    render() {
        const {title} = this.props;
        const {libelle, lignes} = this.state;

        return (
            <div>
                <div>{title}</div>
                <div>Libelle : {libelle}</div>
                <input type="text" value={libelle} onChange={(e=>this.setState({libelle:e.currentTarget.value}))} />

                {
                    lignes.map(({id, user, montant, libelle})=> {
                        return (
                            <Ligne key={id} user={user} montant={montant} libelle={libelle}/>
                        )
                    })
                }
            </div>

        )
    }

}
