import SymptomCard from "../../molecules/SymptomCard/SymptomCard";
import achesIcon from "../../../assets/images/banner-right.png";
import runnyNoseIcon from "../../../assets/images/cough.svg";
import soreThroatIcon from "../../../assets/images/breathing.svg";
import "./SymptomSection.css";

const SymptomSection = () => {
  const symptoms = [
    {
      icon: achesIcon,
      title: "Aches and pains",
      description:
        "Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100",
    },
    {
      icon: runnyNoseIcon,
      title: "Runny nose",
      description:
        "People of all ages who experience fever and/or cough associated with difficulty breathing/shortness of breath.",
    },
    {
      icon: soreThroatIcon,
      title: "Sore throat",
      description:
        "Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer",
    },
  ];

  return (
    <div className="symptom-section">
      <p className="symptom-subtitle">Symptom</p>
      <h1>Basic Symptom Against Corona virus</h1>
      <div className="cards-container">
        {symptoms.map((symptom) => (
          <SymptomCard
            key={symptom.title}
            icon={symptom.icon}
            title={symptom.title}
            description={symptom.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SymptomSection;
