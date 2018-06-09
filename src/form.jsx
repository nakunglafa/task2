import React from 'react';
import './index.css';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
        minWidth: 275,
      },
      form:{
          width:'90%',
          margin:'auto'
      },
      grid:{
          display:'grid',
          'grid-template-columns':'1fr 30px',
          width:'70%',
          margin:'auto'
      },
      input:{
          width:'80%',
          margin:"auto"
      }
  };

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:['']
        };
        this.classes=props.classes;
        this.show=false;
        }
        
        remove(i,event){
            this.state.data.splice(i,1);
            this.setState({data:this.state.data});
        }
        handleFocus(event,ke){
            if(event+1===this.state.data.length){
                this.state.data.push('');
                this.setState({state:this.state.data});
            }
        }
        handleChange(ke,event){
            this.state.data[ke]=event.target.value;
            this.setState({ data:this.state.data});
        }
        textfield(){
                let as=this.state.data.map((a,key)=>{
                return(
                    <div>
                    <TextField
                        id="text"
                        label="test attribute"
                        className={this.classes.input}
                        value={this.state.data[key]}
                        onChange={this.handleChange.bind(this,key)}
                        onFocus={this.handleFocus.bind(this,key)}
                        margin="normal"

                    />
                    <Button size="small" onClick={this.remove.bind(this,key)}>X</Button>
                    </div>
                )
            });
            return as;
        }
        
        cancel(event){
            this.setState({data:['']})
            this.show=false;
        }
        save(){
            let result=this.state.data.filter(a=>a!=='');
            alert('['+result.toString()+'] Array to Send');
        }
        render(){
            return(
            <div>
                <Card className={this.classes.card}>
                    <CardContent>
                        <p>Test</p>
                        <form className={this.classes.form}>
                            {this.textfield()}
                        </form>
                    </CardContent>
                    <CardActions style={{background:'#e8f0fe'}}>
                        <Grid 
                        container
                        spacing={8}
                        alignItems="center"
                        direction="row"
                        justify="flex-end">
                            <Button color="default" size="small" onClick={this.cancel.bind(this)}>cancel</Button>
                            <Button color="primary" size="small"onClick={this.save.bind(this)} >Save</Button>
                        </Grid>
                    </CardActions>
                </Card>
            </div>
        )};
}
Forms.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(Forms);