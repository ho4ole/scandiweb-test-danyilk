import { Checkout as SourceCheckout } from 'SourceComponent/src/route/Checkout/Checkout.component.js';
import CheckoutBar from 'Route/Checkout/CheckoutBar.component';
import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';

class Checkout extends SourceCheckout {

    renderBar() {
        const { checkoutStep } = this.props;
        const { title = '' } = this.stepMap[checkoutStep];
        let checkoutIndex = this.reduceStepsData()
            .indexOf(title.value);
        return (
            <CheckoutBar checkoutIndex={checkoutIndex} stepsTitles={this.reduceStepsData()}/>
        );
    }

    reduceStepsData = () => {
        let stepKeysArray = Object.keys(this.stepMap);
        let stepsTitles = [];
        stepKeysArray.forEach(stepName => stepsTitles.push(this.stepMap[stepName].title.value));
        return stepsTitles;
    };

    render() {
        return (
            <main block="Checkout">
                <ContentWrapper
                    wrapperMix={{
                        block: 'Checkout',
                        elem: 'Wrapper'
                    }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderBar()}
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
