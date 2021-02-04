import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

import "./infoDialog-styles.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InfoDialog = (props) => {
  const { openDialog, setOpenDialog, arrData } = props;

  return (
    <Dialog
      classes={{ paperWidthSm: "infoDialog-container" }}
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpenDialog(false)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"More Details"}</DialogTitle>
      <DialogContent>
        {arrData.length > 0 ? (
          arrData.map((item) => {
            return (
              <div key={item.name}>
                <span>{`${item.name}: ${item.count}`}</span>
              </div>
            );
          })
        ) : (
          <span>There are no data</span>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
