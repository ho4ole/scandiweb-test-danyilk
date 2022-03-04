import { PureComponent } from 'react';

class Step extends PureComponent {

    render() {
        return <>
            <div className={'Step'}>
                {this.props.index < this.props.checkoutIndex
                    ? <div className={'FinishedStepLine'}/>
                    : <div className={'StepLine'}/>
                }
                <div className={'StepCircle'}>
                    {this.props.index < this.props.checkoutIndex
                        ? <span className="checkmark">
                               <div className="checkmark_stem"/>
                               <div className="checkmark_kick"/>
                               </span>
                        : <span className={'StepNumber'}>{this.props.index + 1}</span>
                    }

                    <span className={'StepTitle'}> {this.props.stepTitle}</span>
                </div>
            </div>
        </>;
    }
}

export default Step;
