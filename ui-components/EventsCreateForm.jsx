/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Events } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
}) {
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      (currentFieldValue !== undefined ||
        currentFieldValue !== null ||
        currentFieldValue !== "") &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  return (
    <React.Fragment>
      {isEditing && children}
      {!isEditing ? (
        <>
          <Text>{label}</Text>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
}
export default function EventsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    topic: undefined,
    content: undefined,
    Image: undefined,
    totalSlot: undefined,
    facebook: undefined,
    email: undefined,
    cost: undefined,
    buttonText: undefined,
    speakers: [],
    date: undefined,
    time: undefined,
    locationMap: undefined,
    location: undefined,
  };
  const [topic, setTopic] = React.useState(initialValues.topic);
  const [content, setContent] = React.useState(initialValues.content);
  const [Image, setImage] = React.useState(initialValues.Image);
  const [totalSlot, setTotalSlot] = React.useState(initialValues.totalSlot);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [email, setEmail] = React.useState(initialValues.email);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [buttonText, setButtonText] = React.useState(initialValues.buttonText);
  const [speakers, setSpeakers] = React.useState(initialValues.speakers);
  const [date, setDate] = React.useState(initialValues.date);
  const [time, setTime] = React.useState(initialValues.time);
  const [locationMap, setLocationMap] = React.useState(
    initialValues.locationMap
  );
  const [location, setLocation] = React.useState(initialValues.location);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTopic(initialValues.topic);
    setContent(initialValues.content);
    setImage(initialValues.Image);
    setTotalSlot(initialValues.totalSlot);
    setFacebook(initialValues.facebook);
    setEmail(initialValues.email);
    setCost(initialValues.cost);
    setButtonText(initialValues.buttonText);
    setSpeakers(initialValues.speakers);
    setCurrentSpeakersValue(undefined);
    setDate(initialValues.date);
    setTime(initialValues.time);
    setLocationMap(initialValues.locationMap);
    setLocation(initialValues.location);
    setErrors({});
  };
  const [currentSpeakersValue, setCurrentSpeakersValue] =
    React.useState(undefined);
  const speakersRef = React.createRef();
  const validations = {
    topic: [],
    content: [],
    Image: [{ type: "URL" }],
    totalSlot: [],
    facebook: [{ type: "URL" }],
    email: [{ type: "Email" }],
    cost: [],
    buttonText: [],
    speakers: [{ type: "URL" }],
    date: [],
    time: [],
    locationMap: [{ type: "URL" }],
    location: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          topic,
          content,
          Image: Image || undefined,
          totalSlot,
          facebook: facebook || undefined,
          email,
          cost,
          buttonText,
          speakers: speakers || undefined,
          date,
          time,
          locationMap: locationMap || undefined,
          location,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Events(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "EventsCreateForm")}
    >
      <TextField
        label="Topic"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic: value,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.topic ?? value;
          }
          if (errors.topic?.hasError) {
            runValidationTasks("topic", value);
          }
          setTopic(value);
        }}
        onBlur={() => runValidationTasks("topic", topic)}
        errorMessage={errors.topic?.errorMessage}
        hasError={errors.topic?.hasError}
        {...getOverrideProps(overrides, "topic")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content: value,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image: value,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.Image ?? value;
          }
          if (errors.Image?.hasError) {
            runValidationTasks("Image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("Image", Image)}
        errorMessage={errors.Image?.errorMessage}
        hasError={errors.Image?.hasError}
        {...getOverrideProps(overrides, "Image")}
      ></TextField>
      <TextField
        label="Total slot"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              totalSlot: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot: value,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.totalSlot ?? value;
          }
          if (errors.totalSlot?.hasError) {
            runValidationTasks("totalSlot", value);
          }
          setTotalSlot(value);
        }}
        onBlur={() => runValidationTasks("totalSlot", totalSlot)}
        errorMessage={errors.totalSlot?.errorMessage}
        hasError={errors.totalSlot?.hasError}
        {...getOverrideProps(overrides, "totalSlot")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook: value,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email: value,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              cost: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost: value,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
      ></TextField>
      <TextField
        label="Button text"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText: value,
              speakers,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.buttonText ?? value;
          }
          if (errors.buttonText?.hasError) {
            runValidationTasks("buttonText", value);
          }
          setButtonText(value);
        }}
        onBlur={() => runValidationTasks("buttonText", buttonText)}
        errorMessage={errors.buttonText?.errorMessage}
        hasError={errors.buttonText?.hasError}
        {...getOverrideProps(overrides, "buttonText")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers: values,
              date,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            values = result?.speakers ?? values;
          }
          setSpeakers(values);
          setCurrentSpeakersValue(undefined);
        }}
        currentFieldValue={currentSpeakersValue}
        label={"Speakers"}
        items={speakers}
        hasError={errors.speakers?.hasError}
        setFieldValue={setCurrentSpeakersValue}
        inputFieldRef={speakersRef}
        defaultFieldValue={undefined}
      >
        <TextField
          label="Speakers"
          isRequired={false}
          isReadOnly={false}
          value={currentSpeakersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.speakers?.hasError) {
              runValidationTasks("speakers", value);
            }
            setCurrentSpeakersValue(value);
          }}
          onBlur={() => runValidationTasks("speakers", currentSpeakersValue)}
          errorMessage={errors.speakers?.errorMessage}
          hasError={errors.speakers?.hasError}
          ref={speakersRef}
          {...getOverrideProps(overrides, "speakers")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date: value,
              time,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time: value,
              locationMap,
              location,
            };
            const result = onChange(modelFields);
            value = result?.time ?? value;
          }
          if (errors.time?.hasError) {
            runValidationTasks("time", value);
          }
          setTime(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("time", time)}
        errorMessage={errors.time?.errorMessage}
        hasError={errors.time?.hasError}
        {...getOverrideProps(overrides, "time")}
      ></TextField>
      <TextField
        label="Location map"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap: value,
              location,
            };
            const result = onChange(modelFields);
            value = result?.locationMap ?? value;
          }
          if (errors.locationMap?.hasError) {
            runValidationTasks("locationMap", value);
          }
          setLocationMap(value);
        }}
        onBlur={() => runValidationTasks("locationMap", locationMap)}
        errorMessage={errors.locationMap?.errorMessage}
        hasError={errors.locationMap?.hasError}
        {...getOverrideProps(overrides, "locationMap")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              topic,
              content,
              Image,
              totalSlot,
              facebook,
              email,
              cost,
              buttonText,
              speakers,
              date,
              time,
              locationMap,
              location: value,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
