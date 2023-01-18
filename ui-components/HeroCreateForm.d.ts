/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroCreateFormInputValues = {
    image?: string;
    smallText?: string;
    mediumText?: string;
    largeText?: string;
    buttonText?: string;
};
export declare type HeroCreateFormValidationValues = {
    image?: ValidationFunction<string>;
    smallText?: ValidationFunction<string>;
    mediumText?: ValidationFunction<string>;
    largeText?: ValidationFunction<string>;
    buttonText?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroCreateFormOverridesProps = {
    HeroCreateFormGrid?: FormProps<GridProps>;
    image?: FormProps<TextFieldProps>;
    smallText?: FormProps<TextFieldProps>;
    mediumText?: FormProps<TextFieldProps>;
    largeText?: FormProps<TextFieldProps>;
    buttonText?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroCreateFormProps = React.PropsWithChildren<{
    overrides?: HeroCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeroCreateFormInputValues) => HeroCreateFormInputValues;
    onSuccess?: (fields: HeroCreateFormInputValues) => void;
    onError?: (fields: HeroCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeroCreateFormInputValues) => HeroCreateFormInputValues;
    onValidate?: HeroCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeroCreateForm(props: HeroCreateFormProps): React.ReactElement;
