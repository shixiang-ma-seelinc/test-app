import type { ExtensionSandboxRemoteRender } from '@sl/extension-sandbox';
import type SL_CHECKOUT_UI_COMPONENTS from '@sl/checkout-ui-components';

declare global {
  // globals
  var render: ExtensionSandboxRemoteRender;
  // components
  var Text: (typeof SL_CHECKOUT_UI_COMPONENTS)['Text'];
  var View: (typeof SL_CHECKOUT_UI_COMPONENTS)['View'];
  var TextBlock: (typeof SL_CHECKOUT_UI_COMPONENTS)['TextBlock'];
  var SkeletonText: (typeof SL_CHECKOUT_UI_COMPONENTS)['SkeletonText'];
  var SkeletonTextBlock: (typeof SL_CHECKOUT_UI_COMPONENTS)['SkeletonTextBlock'];
  var SkeletonImage: (typeof SL_CHECKOUT_UI_COMPONENTS)['SkeletonImage'];
  var Icon: (typeof SL_CHECKOUT_UI_COMPONENTS)['Icon'];
  var Banner: (typeof SL_CHECKOUT_UI_COMPONENTS)['Banner'];
  var Divider: (typeof SL_CHECKOUT_UI_COMPONENTS)['Divider'];
  var Link: (typeof SL_CHECKOUT_UI_COMPONENTS)['Link'];
  var Checkbox: (typeof SL_CHECKOUT_UI_COMPONENTS)['Checkbox'];
  var Choice: (typeof SL_CHECKOUT_UI_COMPONENTS)['Choice'];
  var ChoiceList: (typeof SL_CHECKOUT_UI_COMPONENTS)['ChoiceList'];
  var RichTextRenderer: (typeof SL_CHECKOUT_UI_COMPONENTS)['RichTextRenderer'];
  var BlockStack: (typeof SL_CHECKOUT_UI_COMPONENTS)['BlockStack'];
  var Button: (typeof SL_CHECKOUT_UI_COMPONENTS)['Button'];
  var DatePicker: (typeof SL_CHECKOUT_UI_COMPONENTS)['DatePicker'];
  var TextField: (typeof SL_CHECKOUT_UI_COMPONENTS)['TextField'];
  var PhoneField: (typeof SL_CHECKOUT_UI_COMPONENTS)['PhoneField'];
  var Select: (typeof SL_CHECKOUT_UI_COMPONENTS)['Select'];
  var DateField: (typeof SL_CHECKOUT_UI_COMPONENTS)['DateField'];
}
