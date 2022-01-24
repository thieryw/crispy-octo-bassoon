import { render } from "react-dom";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { ThemeProvider } from "./theme";
import { RouteProvider, useRoute, routes } from "./router";
import { Home } from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";
import { css } from "tss-react/@emotion/css";

function App() {
    const route = useRoute();
    return (
        <GlTemplate
            ThemeProvider={ThemeProvider}
            header={
                <GlHeader
                    className={css({
                        "borderBottom": "solid grey 1px"
                    })}
                    classes={{
                        "link": css({
                            "fontWeight": "bold"
                        }),
                        "darkModeSwitch": css({
                            "border": "solid grey 2px"
                        })
                    }}
                    title={
                        <a {...routes.home().link}>
                            <h1>header Title</h1>
                        </a>
                    }
                    links={[
                        {
                            "label": "link 1",
                            ...routes.page1().link,
                        },
                        {
                            "label": "link 2",
                            ...routes.page2().link,
                        },
                        {
                            "label": "link 3",
                            ...routes.page3().link,
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
                            "label": "link 1",
                            ...routes.page1().link,
                        },
                        {
                            "label": "link 2",
                            ...routes.page2().link,
                        },
                        {
                            "label": "link 3",
                            ...routes.page3().link,
                        },
                    ]}
                />
            }
        >
            {route.name === "home" && <Home />}
            {route.name === "page1" && <Page1 />}
            {route.name === "page2" && <Page2 />}
            {route.name === "page3" && <Page3 />}
        </GlTemplate>
    );
}

//Wrap your app in the RouteProvider component in the router.ts file
render(
    <RouteProvider>
        <App />
    </RouteProvider>,
    document.getElementById("root"),
);
