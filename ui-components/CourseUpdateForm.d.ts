/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Course } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourseUpdateFormInputValues = {
    name?: string;
    descriptions?: string;
    price?: number;
    excerpt?: string;
    image?: string;
    video?: string;
    category?: string;
    duration?: number;
    learningObjective?: string[];
    level?: string;
    curriculum?: string[];
    isFeatured?: boolean;
    headDescription?: string;
    headTitle?: string;
    headContent?: string;
};
export declare type CourseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    descriptions?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    excerpt?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    video?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    learningObjective?: ValidationFunction<string>;
    level?: ValidationFunction<string>;
    curriculum?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    headDescription?: ValidationFunction<string>;
    headTitle?: ValidationFunction<string>;
    headContent?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourseUpdateFormOverridesProps = {
    CourseUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    descriptions?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    excerpt?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    video?: FormProps<TextFieldProps>;
    category?: FormProps<SelectFieldProps>;
    duration?: FormProps<TextFieldProps>;
    learningObjective?: FormProps<TextFieldProps>;
    level?: FormProps<SelectFieldProps>;
    curriculum?: FormProps<TextFieldProps>;
    isFeatured?: FormProps<SwitchFieldProps>;
    headDescription?: FormProps<TextFieldProps>;
    headTitle?: FormProps<TextFieldProps>;
    headContent?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CourseUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    course?: Course;
    onSubmit?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onSuccess?: (fields: CourseUpdateFormInputValues) => void;
    onError?: (fields: CourseUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CourseUpdateFormInputValues) => CourseUpdateFormInputValues;
    onValidate?: CourseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourseUpdateForm(props: CourseUpdateFormProps): React.ReactElement;
