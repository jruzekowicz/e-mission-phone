/*
 * src/app/help-panel/Tutorial.jsx
 */
class TutorialComponent extends React.Component {
    propTypes: {
        isValid: React.PropTypes.bool,
        result: React.PropTypes.object,
        schema: React.PropTypes.object
    }
    constructor(props) {
      super(props);
      this.state = {
        result: {
          fname: this.props.schema.fname,
          lname: this.props.schema.lname
        }
      };
      this.handlefnameChange = this.handlefnameChange.bind(this);
      this.handlelnameChange = this.handlelnameChange.bind(this);
    }
    handlefnameChange(event) {
      newresult = this.state.result
      newresult.fname = event.target.value
      this.setState(newresult)
    }
    handlelnameChange(event) {
      newresult = this.state.result
      newresult.lname = event.target.value
      this.setState(newresult)
    }
    render() {
        return(
                <div className="content-wrapper">
                    <div>
                        First Name -> {this.state.result.fname}
                        Last Name -> {this.state.result.lname}
                    </div>
                    <div>
                    <input type="text" value={this.state.result.fname} onChange={this.handlefnameChange} />
                    <input type="text" value={this.state.result.lname} onChange={this.handlelnameChange} />
                    </div>
                    <div className="row">
                        {/* bootstrap grid as margin */}
                        <div className="col-xs-2" />

                        <div className="col-xs-12 col-md-10 col-lg-8">
                            {/* create new grids for laying out tutorial */}
                            <div className="row">
                                <div className="col-xs-12 text-center tutorial-title">
                                    <h2><b>Itinerum Dashboard Guide</b></h2>
                                </div>
                            </div>

                            {/* Permissions guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6">
                                    <b>Permissions</b>
                                    <p>Allows administrators to control access to web dashboard. A sign-up code can be provided to additional researchers to view survey data.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-key-variant" />
                                </div>
                            </div>

                            {/* Survey wizard guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-star-circle" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <b>Survey Wizard</b>
                                    <p>A drag-and-drop survey building interface. Drag field types from the right to central survey stack to add questions to the survey. Question can be repositioned after initial drop. Click “edit” to change the prompt question and the field’s column name in answers database table.</p>
                                </div>
                            </div>

                            {/* Survey Stats guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6">
                                    <b>Metrics</b>
                                    <p>Provides dashboard overview charts and metrics for the ongoing survey.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-chart-areaspline" />
                                </div>
                            </div>

                            {/* Participants guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-face" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <b>Participants</b>
                                    <p>A searchable table view of mobile users and their survey responses. Clicking on a user within the table will select their UUID within the GPS Points view.</p>
                                </div>
                            </div>

                            {/* GPS Points guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6">
                                    <b>GPS Points</b>
                                    <p>Allows admins and researchers to view any participating users points. Participants are limited to this view to display their own collected points.</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-crosshairs-gps" />
                                </div>
                            </div>

                            {/* Data Management guide */}
                            <div className="row tutorial-row">
                                <div className="col-xs-12 col-sm-6 help-icon">
                                    <i className="mdi mdi-cloud-download" />
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <b>Data Management</b>
                                    <p>Provides downloads for survey data, uploading of subway stations and resetting of an active survey.</p>
                                </div>                                
                            </div>

                        </div>

                        {/* bootstrap grid as margin */}
                        <div className="col-xs-2" />
                    </div>
                </div>
        )
    }
}
