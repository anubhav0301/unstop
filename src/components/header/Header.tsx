import { useEffect, useState } from "react";
import svgs from "../../assets/svgs";
import { useBreakpoints } from "../../hooks";
import { useStyles } from "./header.styles";
import MobileHeader from "./mobileHeader/MobileHeader";

/**
 * Component to render header for web
 * @returns {JSX.Element}
 */
const Header = ():JSX.Element => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header css={styles.hContainer}>
      <div css={styles.tabContainer}>
        <p css={styles.hHeading}>Assessment</p>
        <div css={styles.separator} />
        <div css={styles.hSubHeadingContainer}>
          <p css={styles.hSubHeading}>My Assessment</p>
        </div>
      </div>
      <div>
        <img src={svgs.webResponsive} alt="mobile"/>
      </div>
    </header>
  );
};

export default Header;
