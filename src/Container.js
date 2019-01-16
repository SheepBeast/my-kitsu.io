import React, { Component } from "react";
import {
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputAdornment,
  InputBase,
  Popper,
  ClickAwayListener,
  Grow,
  MenuList,
  MenuItem
} from "@material-ui/core";
import { brown } from "@material-ui/core/colors";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Container extends Component {
  state = {
    anchorEl: null,
    open: false,
    placement: null,
    isSearching: false
  };

  handleBrowseOpen = event => {
    var { open } = this.state;
    if (!open) {
      this.setState(state => ({
        open: true
      }));
    }
  };

  handleBrowseClose = event => {
    const { anchorEl, open } = this.state;
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }

    if (open) {
      this.setState({
        open: false
      });
    }
  };

  handleSearchState = isSearching => {
    this.setState({
      isSearching
    });
  };

  componentDidMount = () => {
    let anchorEl = document.getElementById("browseAnchorEl");

    this.setState({
      anchorEl
    });
  };

  render() {
    const { anchorEl, open, isSearching } = this.state;

    return (
      <div className="container">
        <AppBar style={{ backgroundColor: brown["500"] }}>
          <Toolbar variant="dense">
            <Grid container justify="center" alignItems="center">
              <Grid
                item
                xs={8}
                container
                justify="space-around"
                alignItems="center"
              >
                <Grid
                  item
                  container
                  xs={5}
                  justify="flex-start"
                  alignItems="center"
                >
                  <Grid item container xs={3}>
                    <Typography variant="h6" color="inherit">
                      KITUS.IO
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={3}
                    justify="center"
                    alignItems="center"
                  >
                    <Popper
                      open={open}
                      anchorEl={anchorEl}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>
                          <Paper>
                            <ClickAwayListener
                              onClickAway={this.handleBrowseClose}
                            >
                              <MenuList dense={true}>
                                <MenuItem onClick={this.handleBrowseClose}>
                                  <Typography variant="subheading">
                                    Anime
                                  </Typography>
                                </MenuItem>
                                <MenuItem onClick={this.handleBrowseClose}>
                                  <Typography variant="subheading">
                                    Manga
                                  </Typography>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                    <Typography
                      id="browseAnchorEl"
                      variant="subheading"
                      color="inherit"
                      onClick={this.handleBrowseOpen}
                    >
                      Browse
                    </Typography>
                    <ArrowDropDownIcon onClick={this.handleBrowseOpen} />
                  </Grid>
                  <Grid item container xs={2}>
                    <Typography variant="subheading" color="textSecondary">
                      Groups
                    </Typography>
                  </Grid>
                  <Grid item container xs={2}>
                    <Typography variant="subheading" color="textSecondary">
                      Feedback
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={5}
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid item xs={5} container justify="flex-end">
                    <div
                      style={{
                        transition: "width 0.3s ease-in-out",
                        width: isSearching ? "100%" : 150
                      }}
                    >
                      <FormControl>
                        <div
                          style={{
                            padding: "0 8px",
                            borderRadius: 6,
                            backgroundColor: "rgba(255,255,255,0.1)"
                          }}
                        >
                          <InputBase
                            startAdornment={
                              <InputAdornment position="start">
                                <SearchIcon color="disabled" />
                              </InputAdornment>
                            }
                            placeholder="Search..."
                            onFocus={() => {
                              this.handleSearchState(true);
                            }}
                            onBlur={() => {
                              this.handleSearchState(false);
                            }}
                          />
                        </div>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" color="textSecondary">
                      Sign In
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" color="textSecondary">
                      Sign Up
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
