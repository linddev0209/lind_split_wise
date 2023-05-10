export interface IButton {
  className?: string;
}

const AppStoreButton: React.FC<IButton> = (props) => {
  return (
    <div>
      <a
        href="https://apps.apple.com/us/app/splitwise/id458023433"
        className={`block ${props.className}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="42" viewBox="0 0 141 42">
          <path
            fill="#A5A5A5"
            d="M135.932 41.923H5.369c-2.71 0-4.917-2.25-4.917-4.95V5.323c0-2.7 2.207-4.9 4.917-4.9h130.563c2.71 0 5.018 2.2 5.018 4.9v31.65c0 2.7-2.308 4.95-5.018 4.95z"
          ></path>
          <path
            fill="#000"
            d="M139.591 36.65c0 2.2-1.806 3.95-4.014 3.95H5.014C2.806 40.6 1 38.8 1 36.65V5c0-2.2 1.806-4 4.014-4h130.563c2.208 0 4.014 1.8 4.014 4v31.65z"
          ></path>
          <path
            fill="#FFF"
            d="M31.813 20.923c-.05-3.35 2.76-4.95 2.86-5.05-1.556-2.3-4.014-2.6-4.867-2.6-2.058-.2-4.015 1.2-5.068 1.2-1.054 0-2.66-1.2-4.416-1.15-2.208.05-4.315 1.3-5.47 3.3-2.358 4.05-.602 10.05 1.656 13.35 1.155 1.6 2.46 3.4 4.165 3.35 1.706-.05 2.308-1.05 4.366-1.05 2.007 0 2.609 1.05 4.365 1.05 1.807-.05 2.96-1.6 4.065-3.25 1.304-1.85 1.806-3.65 1.856-3.75 0-.05-3.462-1.4-3.512-5.4zm-3.312-9.8c.903-1.15 1.555-2.7 1.355-4.25-1.305.05-2.96.9-3.914 2-.853 1-1.606 2.6-1.405 4.1 1.455.1 3.01-.75 3.964-1.85zM56.3 33.073H53.94l-1.304-4.05H48.12l-1.255 4.05h-2.258l4.466-13.8h2.76l4.466 13.8zm-4.065-5.75l-1.154-3.6c-.1-.35-.351-1.25-.702-2.6h-.05c-.151.6-.352 1.45-.653 2.6l-1.154 3.6h3.713zm15.505.65c0 1.7-.451 3.05-1.355 4-.803.85-1.856 1.3-3.06 1.3-1.305 0-2.259-.45-2.86-1.4h-.05v5.25h-2.209v-10.7c0-1.05-.05-2.15-.1-3.3h1.957l.1 1.6h.05c.753-1.2 1.857-1.8 3.362-1.8 1.154 0 2.158.45 2.96 1.4.804.95 1.205 2.15 1.205 3.65zm-2.258.1c0-.95-.2-1.75-.652-2.4-.502-.65-1.104-1-1.907-1-.552 0-1.054.2-1.505.55-.452.35-.753.85-.853 1.4-.05.25-.1.5-.1.65v1.65c0 .7.2 1.35.652 1.85.451.5 1.003.75 1.756.75.853 0 1.505-.3 1.957-.95.401-.6.652-1.45.652-2.5zm13.749-.1c0 1.7-.452 3.05-1.355 4-.803.85-1.857 1.3-3.06 1.3-1.305 0-2.259-.45-2.81-1.4h-.05v5.25h-2.259v-10.7c0-1.05-.05-2.15-.1-3.3h1.957l.1 1.6h.05c.753-1.2 1.857-1.8 3.362-1.8 1.154 0 2.158.45 2.96 1.4.803.95 1.205 2.15 1.205 3.65zm-2.258.1c0-.95-.2-1.75-.652-2.4-.502-.65-1.104-1-1.907-1-.552 0-1.054.2-1.506.55-.451.35-.752.85-.853 1.4-.05.25-.1.5-.1.65v1.65c0 .7.2 1.35.652 1.85s1.004.75 1.757.75c.853 0 1.505-.3 1.957-.95.401-.6.652-1.45.652-2.5zm15.103 1.15c0 1.15-.401 2.15-1.254 2.85-.903.8-2.158 1.2-3.763 1.2-1.506 0-2.71-.3-3.613-.85l.502-1.85c.953.6 2.057.9 3.211.9.853 0 1.505-.2 1.957-.55.452-.4.702-.9.702-1.5 0-.55-.2-1.05-.552-1.4-.401-.4-1.003-.75-1.906-1.05-2.409-.9-3.613-2.2-3.613-3.95 0-1.15.401-2.05 1.254-2.8.853-.7 1.957-1.1 3.412-1.1 1.255 0 2.309.2 3.162.65l-.552 1.8c-.803-.4-1.656-.65-2.66-.65-.803 0-1.405.2-1.806.55-.351.35-.552.75-.552 1.25 0 .55.2 1 .652 1.35.351.35 1.054.7 2.007 1.05 1.205.5 2.058 1.05 2.61 1.7.501.65.802 1.45.802 2.4zm7.326-4.4h-2.458v4.85c0 1.25.451 1.85 1.304 1.85.402 0 .703-.05 1.004-.1l.05 1.7c-.452.15-1.004.25-1.706.25-.853 0-1.556-.25-2.057-.8-.502-.55-.753-1.45-.753-2.7v-5h-1.455v-1.65h1.455v-1.8l2.158-.65v2.5h2.458v1.55zm11.04 3.2c0 1.55-.452 2.8-1.305 3.75-.903 1-2.158 1.5-3.663 1.5-1.455 0-2.61-.5-3.513-1.45-.853-.95-1.304-2.2-1.304-3.65 0-1.55.451-2.8 1.355-3.8.903-1 2.107-1.45 3.612-1.45 1.456 0 2.66.5 3.513 1.45.903.95 1.305 2.2 1.305 3.65zm-2.309.1c0-.9-.2-1.7-.602-2.35-.451-.8-1.154-1.2-2.007-1.2-.903 0-1.555.4-2.057 1.2-.402.65-.602 1.45-.602 2.4 0 .9.2 1.7.602 2.35.502.8 1.154 1.2 2.007 1.2.853 0 1.505-.4 2.007-1.2.452-.7.652-1.5.652-2.4zm9.534-3.05c-.2-.05-.451-.05-.702-.05-.803 0-1.405.3-1.807.9-.351.5-.552 1.15-.552 1.95v5.2h-2.208v-6.8c0-1.15-.05-2.2-.1-3.15h1.957l.1 1.9h.05c.251-.65.603-1.2 1.105-1.6.501-.35 1.003-.55 1.605-.55.2 0 .402 0 .552.05v2.15zm9.935 2.55c0 .4-.05.75-.1 1h-6.674c.05 1 .352 1.75.954 2.25.552.45 1.304.7 2.157.7 1.004 0 1.907-.15 2.71-.45l.351 1.55c-.953.4-2.057.6-3.362.6-1.555 0-2.76-.45-3.663-1.35-.903-.9-1.304-2.15-1.304-3.65s.401-2.75 1.254-3.75c.853-1.05 2.007-1.6 3.513-1.6 1.455 0 2.509.55 3.261 1.6.602.85.903 1.9.903 3.1zm-2.157-.55c0-.65-.15-1.2-.452-1.7-.401-.6-.953-.9-1.756-.9-.703 0-1.305.3-1.756.9-.352.5-.602 1.05-.653 1.7h4.617zm-73.963-16.25c0 1.2-.35 2.15-1.103 2.75-.703.55-1.656.85-2.91.85-.603 0-1.155-.05-1.606-.1v-6.65c.602-.1 1.204-.15 1.856-.15 1.204 0 2.108.25 2.71.75.752.6 1.053 1.45 1.053 2.55zm-1.154 0c0-.8-.2-1.4-.652-1.8-.401-.4-1.054-.65-1.857-.65-.35 0-.652 0-.903.05v5.05c.15 0 .402.05.753.05.853 0 1.455-.25 1.957-.7.502-.45.702-1.1.702-2zm7.276 1.05c0 .75-.2 1.35-.652 1.85s-1.054.75-1.807.75c-.702 0-1.304-.25-1.706-.7-.451-.5-.652-1.1-.652-1.8 0-.75.2-1.4.652-1.85.452-.45 1.054-.7 1.807-.7.702 0 1.304.25 1.756.7.401.4.602 1 .602 1.75zm-1.154.05c0-.45-.1-.85-.301-1.15-.25-.4-.552-.6-.953-.6-.452 0-.753.2-1.004.6-.2.3-.301.7-.301 1.2 0 .45.1.85.301 1.15.251.4.552.6 1.004.6.401 0 .752-.2.953-.6.2-.4.301-.75.301-1.2zm9.333-2.45l-1.555 4.9h-1.004l-.652-2.1c-.15-.55-.301-1.05-.402-1.6-.1.55-.25 1.05-.401 1.6l-.652 2.1h-1.004l-1.455-4.9h1.104l.552 2.3c.15.55.25 1.05.351 1.55.1-.4.2-.95.401-1.55l.703-2.35h.903l.652 2.3c.151.55.302 1.1.402 1.6h.05c.05-.5.2-1.05.351-1.6l.602-2.3 1.054.05zm5.62 4.9H70.3v-2.8c0-.85-.351-1.3-1.003-1.3-.301 0-.603.1-.803.35-.2.25-.301.5-.301.85v2.9h-1.004v-3.5c0-.45 0-.9-.05-1.4h.953l.05.75h.05c.151-.25.302-.45.553-.6.3-.2.602-.25 1.003-.25.452 0 .853.15 1.154.45.402.35.552.9.552 1.6v2.95h-.05zm3.01 0H73.31v-7.15h1.104v7.15zm6.424-2.5c0 .75-.201 1.35-.653 1.85-.451.5-1.053.75-1.806.75-.703 0-1.305-.25-1.706-.7-.452-.5-.653-1.1-.653-1.8 0-.75.201-1.4.653-1.85.451-.5 1.054-.7 1.756-.7.703 0 1.305.25 1.756.7.452.4.653 1 .653 1.75zm-1.104.05c0-.45-.1-.85-.301-1.15-.251-.4-.552-.6-.954-.6-.451 0-.752.2-1.003.6-.201.3-.301.7-.301 1.2 0 .45.1.85.3 1.15.252.4.553.6 1.004.6.402 0 .753-.2.954-.6.2-.4.3-.75.3-1.2zm6.422 2.45h-1.003l-.1-.55h-.05c-.352.45-.804.65-1.456.65-.451 0-.853-.15-1.104-.45-.25-.25-.401-.6-.401-1 0-.6.25-1.05.752-1.35.502-.3 1.205-.45 2.108-.45v-.1c0-.65-.351-.95-1.004-.95-.501 0-.903.1-1.254.35l-.2-.7c.45-.3 1.003-.4 1.705-.4 1.305 0 1.907.65 1.907 2v1.8c0 .45.05.85.1 1.15zm-1.154-1.7v-.75c-1.204 0-1.806.3-1.806 1 0 .25.05.45.2.55.151.15.302.2.553.2.25 0 .451-.1.652-.25.2-.15.351-.35.401-.6v-.15zm7.326 1.7h-.953l-.05-.8h-.05c-.302.6-.853.9-1.556.9-.602 0-1.104-.25-1.455-.7-.402-.45-.602-1.05-.602-1.8 0-.8.2-1.45.652-1.9.401-.45.903-.7 1.505-.7.653 0 1.104.2 1.405.65v-2.8h1.104v5.8c-.05.5 0 .95 0 1.35zm-1.104-2.1v-.8c0-.15 0-.25-.05-.35-.05-.25-.2-.5-.401-.65-.2-.2-.452-.25-.753-.25-.401 0-.702.15-.953.5-.251.3-.352.75-.352 1.25s.1.9.352 1.2c.25.3.552.5.953.5.351 0 .652-.15.853-.4.251-.35.351-.65.351-1zm10.437-.4c0 .75-.2 1.35-.652 1.85s-1.054.75-1.806.75c-.703 0-1.305-.25-1.706-.7-.452-.5-.653-1.1-.653-1.8 0-.75.201-1.4.653-1.85.451-.5 1.053-.7 1.806-.7.703 0 1.305.25 1.756.7.402.4.602 1 .602 1.75zm-1.154.05c0-.45-.1-.85-.3-1.15-.252-.4-.553-.6-1.004-.6-.452 0-.753.2-1.004.6-.2.3-.3.7-.3 1.2 0 .45.1.85.3 1.15.251.4.552.6 1.004.6.401 0 .752-.2 1.003-.6.2-.4.301-.75.301-1.2zm7.025 2.45h-1.104v-2.8c0-.85-.35-1.3-1.003-1.3-.301 0-.602.1-.803.35-.2.25-.301.5-.301.85v2.9h-1.104v-3.5c0-.45 0-.9-.05-1.4h.953l.05.75h.05c.151-.25.302-.45.552-.6.301-.2.603-.25 1.004-.25.452 0 .853.15 1.154.45.402.35.552.9.552 1.6v2.95h.05zm7.326-4.1h-1.204v2.35c0 .6.2.9.652.9.2 0 .351 0 .502-.05l.05.8c-.2.1-.502.1-.853.1-.451 0-.752-.15-1.003-.4-.251-.25-.352-.7-.352-1.3v-2.45h-.702v-.8h.702v-.9l1.054-.3v1.2h1.204l-.05.85zm5.77 4.1h-1.103v-2.8c0-.9-.352-1.3-1.004-1.3-.502 0-.853.25-1.054.75-.05.1-.05.25-.05.4v2.95h-1.053v-7.15h1.103v2.95c.352-.55.853-.8 1.456-.8.451 0 .802.15 1.104.45.35.35.551.9.551 1.65.05-.05.05 2.9.05 2.9zm5.972-2.7c0 .2 0 .35-.05.5h-3.262c0 .5.15.85.452 1.1.3.25.652.35 1.053.35.502 0 .904-.1 1.305-.25l.15.75c-.451.2-1.003.3-1.655.3-.753 0-1.355-.2-1.807-.65-.451-.45-.652-1.05-.652-1.8s.2-1.35.602-1.85c.402-.5 1.004-.8 1.706-.8.703 0 1.255.25 1.606.8.401.45.552.95.552 1.55zm-1.054-.3c0-.3-.05-.6-.2-.85a.987.987 0 0 0-.854-.45.987.987 0 0 0-.853.45c-.2.25-.3.5-.3.85h2.207z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default AppStoreButton;