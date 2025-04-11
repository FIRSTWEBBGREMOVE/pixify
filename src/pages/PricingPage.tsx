
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlanFeature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start">
    <CheckIcon className="h-5 w-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="container py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that's right for you, with no hidden fees or complicated tiers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-6">Perfect for occasional use and trying out the service.</p>
            <Button className="w-full mb-6" asChild>
              <Link to="/remove-background">Get Started</Link>
            </Button>
            <div className="space-y-3 text-sm">
              <PlanFeature text="5 image processes per month" />
              <PlanFeature text="Basic background removal" />
              <PlanFeature text="Standard quality output" />
              <PlanFeature text="Max image size: 2MB" />
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg overflow-hidden shadow-lg border-brand-purple relative">
          <div className="absolute top-0 w-full bg-brand-purple text-white text-center py-1 text-sm">
            MOST POPULAR
          </div>
          <div className="p-6 pt-10">
            <h3 className="text-lg font-medium mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$9.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-6">For creators and professionals who need regular access.</p>
            <Button className="w-full mb-6 bg-brand-purple hover:bg-brand-purple/90">Go Pro</Button>
            <div className="space-y-3 text-sm">
              <PlanFeature text="100 image processes per month" />
              <PlanFeature text="Advanced background removal" />
              <PlanFeature text="HD quality output" />
              <PlanFeature text="Max image size: 10MB" />
              <PlanFeature text="Priority processing" />
              <PlanFeature text="Basic email support" />
            </div>
          </div>
        </div>

        {/* Business Plan */}
        <div className="border rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-lg font-medium mb-2">Business</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">$29.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-6">For teams and businesses with high-volume needs.</p>
            <Button variant="outline" className="w-full mb-6">Contact Sales</Button>
            <div className="space-y-3 text-sm">
              <PlanFeature text="Unlimited image processes" />
              <PlanFeature text="Premium background removal" />
              <PlanFeature text="Ultra HD quality output" />
              <PlanFeature text="No file size limits" />
              <PlanFeature text="Batch processing" />
              <PlanFeature text="API access" />
              <PlanFeature text="Dedicated support" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="text-left">
            <h3 className="font-medium mb-2">What happens if I exceed my monthly limit?</h3>
            <p className="text-muted-foreground">
              If you reach your monthly limit, you'll need to upgrade to a higher plan to continue processing images. Your counter resets at the beginning of each billing cycle.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the end of your current billing period.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact our support team for assistance.
            </p>
          </div>
          <div className="text-left">
            <h3 className="font-medium mb-2">How does the API work?</h3>
            <p className="text-muted-foreground">
              Our Business plan includes API access for programmatically removing backgrounds. Documentation and authentication details are provided upon subscription.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
