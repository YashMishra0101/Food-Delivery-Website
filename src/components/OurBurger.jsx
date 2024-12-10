import SectionFlexContainer from "./SectionFlexContainer";
import photo from "../assets/aboutOurFood.png";

function OurBurger({ flex }) {
  return (
    <SectionFlexContainer
      flex={flex}
      images={photo}
      title={"From Pune with Indian Love"}
      description={"About Our Food"}
    />
  );
}

export default OurBurger;
