import './CheckoutBar.style.scss';
import { PureComponent } from 'react';
import Step from 'Route/Checkout/Step.component';

class CheckoutBar extends PureComponent {

    render() {
        return <div className={'CheckoutBar'}>
            <div className={'Steps'}>
                {this.renderSteps()}
                { this.props.checkoutIndex === this.props.stepsTitles.length-1
                    ? <div className={'Step'}>
                            <div className={'FinishedStepLine'}/>
                    </div>
                    : <div className={'Step'}>
                         <div className={'StepLine'}/>
                    </div>

                }
            </div>
        </div>;
    }

    renderSteps() {

        let steps = [...this.props.stepsTitles.slice(0,2)]

        return <>
            {steps.map(stepTitle => <Step stepTitle={stepTitle}
                                                           checkoutIndex={this.props.checkoutIndex}
                                                           key={stepTitle}
                                                           index={this.props.stepsTitles.indexOf(stepTitle)}
            />)}
        </>;
    }
}

export default CheckoutBar;
