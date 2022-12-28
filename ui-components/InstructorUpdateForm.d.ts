/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Instructor } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InstructorUpdateFormInputValues = {
    name?: string;
    bio?: string;
    title?: string;
    linkedin?: string;
    twitter?: string;
    image?: string;
};
export declare type InstructorUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    linkedin?: ValidationFunction<string>;
    twitter?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstructorUpdateFormOverridesProps = {
    InstructorUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    bio?: FormProps<TextFieldProps>;
    title?: FormProps<TextFieldProps>;
    linkedin?: FormProps<TextFieldProps>;
    twitter?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InstructorUpdateFormProps = React.PropsWithChildren<{
    overrides?: InstructorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    instructor?: Instructor;
    onSubmit?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onSuccess?: (fields: InstructorUpdateFormInputValues) => void;
    onError?: (fields: InstructorUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: InstructorUpdateFormInputValues) => InstructorUpdateFormInputValues;
    onValidate?: InstructorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InstructorUpdateForm(props: InstructorUpdateFormProps): React.ReactElement;
