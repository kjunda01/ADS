import React from "react";
import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Detalhes do Carro</h2>
            <table className={styles.table}>
                <tr>
                    <th className={styles.th}>Marca</th>
                    <th className={styles.th}>Km</th>
                    <th className={styles.th}>Cor</th>
                    <th className={styles.th}>Carro Novo</th>
                </tr>
                <tr>
                    <td className={styles.td}>{brand}</td>
                    <td className={styles.td}>{km}</td>
                    <td className={styles.td}>{color}</td>
                    <td className={styles.td}>{newCar ? "Sim" : "Não"}</td>
                </tr>
            </table>
            <div className={styles.footer}>Todos os direitos reservados.</div>
        </div>
    );
};

export default CarDetails;
