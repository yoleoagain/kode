import { createMuiTheme } from "@material-ui/core/styles"


export default createMuiTheme({
  spacing: factor => `${0.25 * factor}rem`,
  palette: {
    primary: {
      main: "#003594"
    }
  }
})