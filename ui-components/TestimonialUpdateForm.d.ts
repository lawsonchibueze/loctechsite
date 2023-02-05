/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Testimonial } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonialUpdateFormInputValues = {
    image?: string;
    category?: string;
    Featured?: boolean;
    Feedback?: string;
    name?: string;
};
export declare type TestimonialUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    Featured?: ValidationFunction<boolean>;
    Feedback?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialUpdateFormOverridesProps = {
    TestimonialUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    Featured?: PrimitiveOverrideProps<SwitchFieldProps>;
    Feedback?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonialUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestimonialUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testimonial?: Testimonial;
    onSubmit?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onSuccess?: (fields: TestimonialUpdateFormInputValues) => void;
    onError?: (fields: TestimonialUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonialUpdateFormInputValues) => TestimonialUpdateFormInputValues;
    onValidate?: TestimonialUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonialUpdateForm(props: TestimonialUpdateFormProps): React.ReactElement;
