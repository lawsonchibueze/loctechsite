/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonialCreateFormInputValues = {
    image?: string;
    category?: string;
    Featured?: boolean;
    Feedback?: string;
    name?: string;
};
export declare type TestimonialCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    Featured?: ValidationFunction<boolean>;
    Feedback?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialCreateFormOverridesProps = {
    TestimonialCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    Featured?: PrimitiveOverrideProps<SwitchFieldProps>;
    Feedback?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonialCreateFormProps = React.PropsWithChildren<{
    overrides?: TestimonialCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestimonialCreateFormInputValues) => TestimonialCreateFormInputValues;
    onSuccess?: (fields: TestimonialCreateFormInputValues) => void;
    onError?: (fields: TestimonialCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonialCreateFormInputValues) => TestimonialCreateFormInputValues;
    onValidate?: TestimonialCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonialCreateForm(props: TestimonialCreateFormProps): React.ReactElement;
