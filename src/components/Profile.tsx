import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbat1-1.fna.fbcdn.net/v/t1.0-1/p200x200/151623172_3760752417371887_287727662620243250_o.jpg?_nc_cat=110&ccb=3&_nc_sid=7206a8&_nc_eui2=AeEu0TXcGouLQhnr57R0q4UGi0rs39qK-HaLSuzf2or4dl15Y_ItqwIlc9JFI74JC7nG9CpPyfFViPPEjG33U5IM&_nc_ohc=cqRmHKkqC6AAX-uvtTg&_nc_ht=scontent.fbat1-1.fna&tp=6&oh=ea2db9f23e9de51c3942ff342efedc15&oe=605CF9BA" alt="Ricardo Ribeiro"></img>
            <div>
                <strong>Ricardo Ribeiro</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}