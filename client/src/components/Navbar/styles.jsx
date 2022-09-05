import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 50px',
        background: "#252e3e"
    },
   
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '600px',
      },

    title: {
        flexGrow: 1,
    },
    personalInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '450px',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
}));