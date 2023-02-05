/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventsCreateFormInputValues = {
    topic?: string;
    content?: string;
    Image?: string;
    totalSlot?: number;
    facebook?: string;
    email?: string;
    cost?: number;
    buttonText?: string;
    speakers?: string[];
    date?: string;
    time?: string;
    locationMap?: string;
    location?: string;
};
export declare type EventsCreateFormValidationValues = {
    topic?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
    totalSlot?: ValidationFunction<number>;
    facebook?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    buttonText?: ValidationFunction<string>;
    speakers?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    time?: ValidationFunction<string>;
    locationMap?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventsCreateFormOverridesProps = {
    EventsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    topic?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
    totalSlot?: PrimitiveOverrideProps<TextFieldProps>;
    facebook?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    buttonText?: PrimitiveOverrideProps<TextFieldProps>;
    speakers?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    time?: PrimitiveOverrideProps<TextFieldProps>;
    locationMap?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventsCreateFormProps = React.PropsWithChildren<{
    overrides?: EventsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onSuccess?: (fields: EventsCreateFormInputValues) => void;
    onError?: (fields: EventsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventsCreateFormInputValues) => EventsCreateFormInputValues;
    onValidate?: EventsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventsCreateForm(props: EventsCreateFormProps): React.ReactElement;
