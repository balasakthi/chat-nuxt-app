<template>

  <v-container class="my-6" fluid>
    <h1 class="mb-6 text-h5 text-center text-grey-darken-3">
      <v-icon
        color="grey-darken-3"
        icon="mdi-square-rounded-badge"
        size="35"
      ></v-icon>
      Chat App
    </h1>

    <v-btn
      variant="outlined"
      class="my-2 text-subtitle-1 rounded-lg"
      color="primary"
      size="x-large"
      aria-label="Sign In Button"
      block
      flat
    >
      New chat +
    </v-btn>

    <v-sheet class="d-flex flex-row justify-space-between bg-transparent">
      <v-btn
        density="default"
        variant="plain"
        color="grey-darken-4"
        icon="mdi-magnify"
      ></v-btn>

      <v-btn
        density="default"
        variant="plain"
        color="grey-darken-4"
        icon="mdi-tune-variant"
      ></v-btn>
    </v-sheet>

     <v-list class="bg-transparent" v-model:opened="open" >

    <v-list-group v-model="open" value="Recent">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Recent"
          ></v-list-item>
        </template>
      
      <v-list-group v-model="open" value="Today">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Today"></v-list-item>
          </template>

          <v-list-item
            v-for="([title], i) in today"
            :key="i"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
     
     <v-list-group v-model="open" value="Yesterday">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Yesterday"></v-list-item>
          </template>

          <v-list-item
            v-for="([title], i) in yesterday"
            :key="i"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
     
     <v-list-group value="Last Week">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Last Week"></v-list-item>
          </template>

          <v-list-item
            v-for="([title], i) in lastweek"
            :key="i"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
     </v-list-group>


        
    </v-list>

     
    <v-divider></v-divider>




 
    <v-list lines="one" class="bg-transparent">

      


      <v-list-item v-for="(item, i) in preferenceMenu" :key="i" :value="item">
        <template v-slot:prepend>
          <v-icon :icon="item.props.prependIcon"></v-icon>
        </template>

        <template v-slot:append>
          <v-icon :icon="item.props.appendIcon"></v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
 
    <v-sheet
      class="d-flex flex-row justify-space-between align-center bg-white border rounded-lg border-warning"
    >
    
      <v-list lines="one" density="compact">
        <v-list-item
          title="Basic Plan"
          subtitle="20/20 left credit"   
        >
           <template v-slot:prepend>
          <v-icon class='mr-n4' color="primary" icon="mdi-square-rounded-badge"></v-icon>
        </template>
        </v-list-item>
      </v-list>
 
      <v-btn
        size="small"
        class="mr-3 text-capitalize rounded-lg"
        color="warning"
        flat
        >Upgrade</v-btn
      >
    </v-sheet>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";


  const open = ref(['Recent', 'Today'])
  const today = [
    ['What is Ai assistant?'],
    ['Best laptop brands and features'],
    
   
  ]

const yesterday= [
['How many days are there in a year?'],
    ['Can AI lead to job displacement?'],
    ['What role does AI play in addressing global challenges, such as climate change or poverty reduction?'],
    ['Who is John Doe?'],
    ['Lorem ipsum dorem sit amet convertinos'],
  ];

const lastweek = [
   ['How many days are there in a year?'],
    ['Can AI lead to job displacement?']
];



const recentMenu = ref([{
  title: 'Recent',
  value: 1,
          props: {
            appendIcon: 'mdi-chevron-right',
          },
  }
]);

const preferenceMenu = ref([{
  title: 'Preferences',
  value: 1,
  props:{
    prependIcon: 'mdi-nut',
    appendIcon: 'mdi-chevron-right',
  },
},
{
  title: 'Help & Support',
  value: 2,
  props:{
    prependIcon: 'mdi-information-outline',
    appendIcon: 'mdi-chevron-right',
  },
}
]);

const items = ref([

           { type: 'subheader', title: 'Today' },
          {
            title: 'What is Ai assistant?',
            value: 2,
        },
         {
          title: 'Best laptop brands and features',
          value: 3,
        },
         { type: 'subheader', title: 'Yesterday' },
          {
            title: 'How many days are there in a year?',
            value: 4,
        },
         {
          title: 'Can AI lead to job displacement?',
          value: 5,
        },
        {
          title: 'What role does AI play in addressing global challenges, such as climate change or poverty reduction?',
          value: 6,
        },
        {
          title: 'Who is John Doe?',
          value: 7,
        },
        {
          title: 'Lorem ipsum dorem sit amet convertinos',
          value: 8,
        },
        { type: 'subheader', title: 'Last week' },
          {
            title: 'How many days are there in a year?',
            value: 9,
        },
        {
          title: 'Can AI lead to job displacement?',
          value: 10
        }


      ]);



</script>
