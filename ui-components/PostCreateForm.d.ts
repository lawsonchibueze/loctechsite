/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostCreateFormInputValues = {
    title?: string;
    content?: string;
    isFeatured?: boolean;
    image?: string;
    category?: string;
    tags?: string;
    author?: string;
    date?: string;
};
export declare type PostCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    isFeatured?: ValidationFunction<boolean>;
    image?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    author?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostCreateFormOverridesProps = {
    PostCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    content?: FormProps<TextFieldProps>;
    isFeatured?: FormProps<SwitchFieldProps>;
    image?: FormProps<TextFieldProps>;
    category?: FormProps<TextFieldProps>;
    tags?: FormProps<TextFieldProps>;
    author?: FormProps<TextFieldProps>;
    date?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostCreateFormProps = React.PropsWithChildren<{
    overrides?: PostCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostCreateFormInputValues) => PostCreateFormInputValues;
    onSuccess?: (fields: PostCreateFormInputValues) => void;
    onError?: (fields: PostCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostCreateFormInputValues) => PostCreateFormInputValues;
    onValidate?: PostCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostCreateForm(props: PostCreateFormProps): React.ReactElement;
