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
export declare type CourseCreateFormInputValues = {
    name?: string;
    descriptions?: string;
    price?: number;
    image?: string;
    video?: string;
    category?: string;
    duration?: number;
    learningObjective?: string[];
    isFeatured?: boolean;
    online?: boolean;
    curriculum?: string;
    headTitle?: string;
    headMeta?: string;
    headContent?: string;
    instructorImage?: string;
    instructorName?: string;
};
export declare type CourseCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    descriptions?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    learningObjective?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    online?: ValidationFunction<boolean>;
    curriculum?: ValidationFunction<string>;
    headTitle?: ValidationFunction<string>;
    headMeta?: ValidationFunction<string>;
    headContent?: ValidationFunction<string>;
    instructorImage?: ValidationFunction<string>;
    instructorName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseCreateFormOverridesProps = {
    CourseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    descriptions?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    video?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<SelectFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    learningObjective?: PrimitiveOverrideProps<TextFieldProps>;
    isFeatured?: PrimitiveOverrideProps<SwitchFieldProps>;
    online?: PrimitiveOverrideProps<SwitchFieldProps>;
    curriculum?: PrimitiveOverrideProps<TextFieldProps>;
    headTitle?: PrimitiveOverrideProps<TextFieldProps>;
    headMeta?: PrimitiveOverrideProps<TextFieldProps>;
    headContent?: PrimitiveOverrideProps<TextFieldProps>;
    instructorImage?: PrimitiveOverrideProps<TextFieldProps>;
    instructorName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseCreateFormProps = React.PropsWithChildren<{
    overrides?: CourseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onSuccess?: (fields: CourseCreateFormInputValues) => void;
    onError?: (fields: CourseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourseCreateFormInputValues) => CourseCreateFormInputValues;
    onValidate?: CourseCreateFormValidationValues;
} & React.CSSProperties>;
export default function CourseCreateForm(props: CourseCreateFormProps): React.ReactElement;
