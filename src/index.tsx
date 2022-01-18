import { render } from "react-dom";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { ThemeProvider } from "./theme";

function App() {
  return (
    <GlTemplate
      ThemeProvider={ThemeProvider}
      header={
        <GlHeader
          title="Header title"
          links={[
            {
              "label": "link 1",
              "link": { "href": "https://example.com" },
            },
            {
              "label": "link 2",
              "link": { "href": "https://example.com" },
            },
            {
              "label": "link 3",
              "link": { "href": "https://example.com" },
            },
          ]}
          enableDarkModeSwitch={true}
          githubRepoUrl="https://github.com/torvalds/linux"
          githubButtonSize="large"
        />
      }
      headerOptions={{
        "position": "fixed",
        "isRetracted": "smart",
      }}
      footer={
        <GlFooter
          bottomDivContent="Licence M I T"
          email="email@email.com"
          phoneNumber="+33545345676"
          links={[
            {
              "href": "https://example.com",
              "title": "link 1"
            },
            {
              "href": "https://example.com",
              "title": "link 2"
            },
            {
              "href": "https://example.com",
              "title": "link 3"
            },
          ]}
        />
      }
    >

    </GlTemplate>
  );
}

render(
  <App />,
  document.getElementById("root")
);