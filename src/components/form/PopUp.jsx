// DEPENDENCIES
import { Snackbar, SnackbarContent, Alert } from "@mui/material"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import TaskAltIcon from '@mui/icons-material/TaskAlt'



const PopUp = ({ type, openModal, handleClose }) => {

  switch (type) {
    case "success":
      return (<Snackbar
        open={openModal}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#357F76",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(8, 22, 69, 0.6)",
          },
        }}
      >
        <SnackbarContent
          message={
            <div className="w-full">
              <Alert
              icon={<TaskAltIcon sx={{ color: "white" }} />}
                sx={{
                  backgroundColor: "#357F76",
                  color: "white",
                  fontFamily: "MontserratAlternates Bold",
                  padding: "0px 10px"
                }}
              >
                <p>Message envoyé avec succès !</p>
              </Alert>
              <div className="h-[2px] bg-grey">
                <div className="h-full bg-white animate-progress" ></div>
              </div>
            </div>
          }
        />
      </Snackbar >)
    case "failed":
      return (<Snackbar
        open={openModal}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#FC8B2B",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(8, 22, 69, 0.6)",
          },
        }}
      >
        <SnackbarContent
          message={
            <div className="w-full">
              <Alert
              icon={<ErrorOutlineIcon sx={{ color: "#081645" }} />}
                sx={{
                  backgroundColor: "#FC8B2B",
                  color: "#081645",
                  fontFamily: "MontserratAlternates Bold",
                  padding: "0px 10px"
                }}
              >
                <p>Erreur, message non envoyé...</p>
              </Alert>
              <div className="h-[2px] bg-grey">
                <div className="h-full bg-white animate-progress" ></div>
              </div>
            </div>
          }
        />
      </Snackbar >) 
    default:
      return ""
  }
}

export default PopUp