/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Hero } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroUpdateFormInputValues = {
    image?: string;
    smallText?: string;
    mediumText?: string;
    largeText?: string;
    buttonText?: string;
};
export declare type HeroUpdateFormValidationValues = {
    image?: ValidationFunction<string>;
    smallText?: ValidationFunction<string>;
    mediumText?: ValidationFunction<string>;
    largeText?: ValidationFunction<string>;
    buttonText?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroUpdateFormOverridesProps = {
    HeroUpdateFormGrid?: FormProps<GridProps>;
    image?: FormProps<TextFieldProps>;
    smallText?: FormProps<TextFieldProps>;
    mediumText?: FormProps<TextFieldProps>;
    largeText?: FormProps<TextFieldProps>;
    buttonText?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeroUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hero?: Hero;
    onSubmit?: (fields: HeroUpdateFormInputValues) => HeroUpdateFormInputValues;
    onSuccess?: (fields: HeroUpdateFormInputValues) => void;
    onError?: (fields: HeroUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeroUpdateFormInputValues) => HeroUpdateFormInputValues;
    onValidate?: HeroUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeroUpdateForm(props: HeroUpdateFormProps): React.ReactElement;
